import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.headers.token;
    const { db, users, doctors } = await connectToDatabase();
    const user = await users.findOne({ token: token });
    if (user){
        const familyMembers = user.family || [];
        let allmedicalHistory = {}
        for (let member of familyMembers){
            let mem = await users.findOne({ _id: member });
            if (mem){
                let memfamily = mem.family || [];
                if (memfamily.includes(user._id)){
                    allmedicalHistory[member] = mem.medicalHistory || [];
                }
            }
        }
        allmedicalHistory[user._id] = user.medicalHistory || [];
        res.status(200).json({ medicalHistory: allmedicalHistory });
    }
  }
}