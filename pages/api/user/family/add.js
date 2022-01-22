import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.headers.token;
    const { db, users, doctors } = await connectToDatabase();
    const user = await users.findOne({ token: token });
    const member = await users.findOne({ _id: req.body.memberId });
    if (user && member) {
        await user.updateOne({"token": token}, {$push: {family: member._id}}, {upsert: true})
        res.status(200).json({ message: "Successfully added member to family" });
    }else{
      res.status(201).json({ message: "User Not Found or Invalid Token!" })
    }
  }
}