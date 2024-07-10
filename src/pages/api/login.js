import { dbConnect } from '../../../utils/database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { db, client } = await dbConnect();
    const collection = db.collection('users');

    const user = await collection.findOne({ no_telepon: req.body.no_telepon });
    if (!user) {
      res.status(401).json({ message: 'Akun tidak ditemukan!' });
      client.close();
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.kata_sandi, user.kata_sandi);
    //print both result
    console.log(req.body.kata_sandi, user.kata_sandi);
    if (!isPasswordCorrect) {
      res.status(401).json({ message: 'Kata sandi salah!' });
      client.close();
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1y' });
    res.status(201).json({
        data: token,
        meta:{
          code:200,
          message: 'Login berhasil!',
        }
      });
    client.close();
  }
};

const isAuthenticated = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return null;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
        return null;
    }
}
export default handler;
export { isAuthenticated };