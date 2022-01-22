import { connectToDatabase } from "../../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    const id = req.body.id;
    if (!token) {
        res.status(400).json({ message: "Please enter token" });
    }
    const { db, users, doctors } = await connectToDatabase();
    const result = await users.findOne({ token: token });
    // console.log(result)
    if (result) {
        let medhis = result.medicalHistory;
        let final;
        for (let his of medhis) {
            if (his.id === id) {
                final = his;
                break;
            }
        }
        if (final) {
            res.status(200).json({ message: "Data found", data: final });
        }else{
            res.status(200).json({ message: "Data not found" });
        }
    }
    else {
        res.status(201).json({ message: "Incorrect token" });
        console.log('Incorrect token')
    }
  }
}