import { dbConnect } from '../../../utils/database';
const { isAuthenticated } = require('./login');

//handler using middleware isAuthenticated
const handler = async (req, res) => {
    const { db, client } = await dbConnect();
    if (req.method === 'POST'){
        // Create or update a note
        const decoded = await isAuthenticated(req, res);
        if (!decoded) {
            client.close();
            return;
        }
        const note = {
            content: req.body.content,
        };
        const result = await db.collection('notes').updateOne({ user_id: decoded.id }, { $set: note }, { upsert: true });
        res.status(201).json({
            data: result,
            meta: {
                code: 201,
                message: 'Catatan berhasil dibuat atau diubah',
            }
        });
    } else if (req.method === 'GET') {
        // Get all notes
        const decoded = await isAuthenticated(req, res);
        if (!decoded) {
            client.close();
            return;
        }
        //every user only have 1 note, so we use findOne if the content is empty just return empty string
        const note = await db.collection('notes').findOne({ user_id: decoded.id });
        res.status(200).json({
            data: {
                content: note ? note.content : '',
            },
            meta: {
                code: 200,
                message: 'Catatan berhasil diambil',
            }
        });
    }
    client.close();
}

export default handler;