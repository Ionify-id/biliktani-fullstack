import { dbConnect } from '../../../utils/database';
import { v4 as uuidv4 } from 'uuid';
const { isAuthenticated } = require('./login');

const handler = async (req, res) => {
    const { db, client } = await dbConnect();
    if (req.method === 'POST'){
        //create a schedule
        const decoded = await isAuthenticated(req, res);
        if (!decoded) {
            client.close();
            return;
        }
        //created_at (date), updated_at (date), komoditas (text), jadwal_tanam (date), jadwal_panen (date)
        const schedule = {
            _id: uuidv4(),
            created_at: new Date(),
            updated_at: new Date(),
            komoditas: req.body.komoditas,
            jadwal_tanam: new Date(req.body.jadwal_tanam),
            jadwal_panen: new Date(req.body.jadwal_panen),
        };
        const result = await db.collection('jadwal').insertOne(schedule);
        res.status(201).json({
            data: result,
            meta: {
                code: 201,
                message: 'Jadwal berhasil dibuat',
            }
        });
    } else if (req.method === 'GET') {
        // Get all schedules using pagination
        const decoded = await isAuthenticated(req, res);
        if (!decoded) {
            client.close();
            return;
        }
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        console.log(page, limit);
        const skip = (page - 1) * limit;
        //sort by newest updated_at
        const schedules = await db.collection('jadwal').find().sort({ updated_at: -1 }).skip(skip).limit(limit).toArray();
        res.status(200).json({
            data: schedules,
            meta: {
                code: 200,
                message: 'Berhasil mendapatkan jadwal',
            }
        });

    } else if (req.method === 'PUT') {
        // Update a schedule
        const decoded = await isAuthenticated(req, res);
        if (!decoded) {
            client.close();
            return;
        }
        //check is that schedule is exist
        const schedule = await db.collection('jadwal').findOne({
            _id: req.body._id,
        });
        if (!schedule) {
            res.status(404).json({ message: 'Jadwal tidak ditemukan' });
            client.close();
            return;
        }

        const allowedFields = ["komoditas", "jadwal_tanam", "jadwal_panen"];
        let updatedSchedule = {};
        for (let prop in req.body) {
            if (allowedFields.includes(prop)) {
                updatedSchedule[prop] = req.body[prop];
            }
        }
        const result = await db.collection('jadwal').updateOne({ _id: req.body._id }, { $set: updatedSchedule });
        res.status(201).json({
            data: result,
            meta: {
                code: 201,
                message: 'Jadwal berhasil diubah',
            }
        });
    } else if (req.method === 'DELETE') {
        // Delete a schedule
        const decoded = await isAuthenticated(req, res);
        if (!decoded) {
            client.close();
            return;
        }
        const result = await db.collection('jadwal').deleteOne({ _id: req.body._id });
        res.status(200).json({
            data: result,
            meta: {
                code: 200,
                message: 'Jadwal berhasil dihapus',
            }
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
    client.close();
}

export default handler;
