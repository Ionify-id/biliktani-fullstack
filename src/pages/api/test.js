// pages/api/test.js
import { dbConnect } from '../../../utils/database';

const handler = async (req, res) => {
  try {
    const { db, client } = await dbConnect();
    res.status(200).json({
        data: [],
        meta:{
          code:200,
          message: 'Database connection successful',
        }
    });
    client.close();

  } catch (error) {
    res.json({ message: 'Database connection failed', error: error.message });
  }
};

export default handler;