import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    const { db, users, doctors } = await connectToDatabase();
    const user = await users.findOne({ token: token });
    if (user){
        const familyMembers = user.family || [];
        let alllabResults = {}
        for (let member of familyMembers){
            let mem = await users.findOne({ _id: member });
            if (mem){
                let memfamily = mem.family || [];
                if (memfamily.includes(user._id)){
                    alllabResults[member] = mem.labResults || [];
                }
            }
        }
        alllabResults[user._id] = user.labResults || [];
        res.status(200).json({ labResults: alllabResults });
    }else{
      res.status(201).json({ message: "Invalid Token!" })
    }
  }
}