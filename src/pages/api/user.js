import { dbConnect } from '../../../utils/database';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const { isAuthenticated } = require('./login');

const handler = async (req, res) => {
  const { db, client } = await dbConnect();
  if (req.method === 'POST') {
    // Register a new user
    const hashedPassword = await bcrypt.hash(req.body.kata_sandi, 10);
    const newUser = {
      _id: uuidv4(),
      nama_lengkap: req.body.nama_lengkap,
      no_telepon: req.body.no_telepon,
      alamat: req.body.alamat,
      dusun: req.body.dusun,
      rt: req.body.rt,
      rw: req.body.rw,
      kelompok_tani: req.body.kelompok_tani,
      kata_sandi: hashedPassword,
      lokasi_lahan: req.body.lokasi_lahan,
      luas_lahan: req.body.luas_lahan,
      jenis_komoditas: req.body.jenis_komoditas,
      produktivitas: req.body.produktivitas,
      cara_pemasaran: req.body.cara_pemasaran,
    };
    const result = await db.collection('users').insertOne(newUser);
    res.status(201).json({
      data: result,
      meta:{
        code:201,
        message: 'Akun anda berhasil dibuat',
      }
    });
  } else if (req.method === 'PUT') {
    const allowedFields = ["nama_lengkap", "no_telepon", "alamat", "dusun", "rt", "rw", "kelompok_tani", "kata_sandi", "lokasi_lahan", "luas_lahan", "jenis_komoditas", "produktivitas", "cara_pemasaran"];
    let updatedUser = {};
    for (let prop in req.body) {
        if (allowedFields.includes(prop)) {
            updatedUser[prop] = req.body[prop];
        }
    }
    // Update user profile
    const decoded = await isAuthenticated(req, res);
    if (!decoded) {
      client.close();
      return;
    }

    const user = await db.collection('users').findOne({ _id: decoded.id });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      client.close();
      return;
    }

    const result = await db.collection('users').updateOne({ _id: decoded.id }, { $set: updatedUser });
    res.status(201).json({
      data: result,
      meta:{
        code:201,
        message: 'Akun anda berhasil diubah',
      }
    });
  } else if (req.method === 'GET') {
    // Get user profile
    //get token from auth bearer token
    const decoded = await isAuthenticated(req, res);
    if (!decoded) {
      client.close();
      return;
    }
    const user = await db.collection('users').findOne({ _id: decoded.id });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      client.close();
      return;
    }
    res.status(200).json({
      data: user,
      meta:{
        code:200,
        message: 'Data user berhasil ditemukan',
      }
    });
  }

  client.close();
};

export default handler;