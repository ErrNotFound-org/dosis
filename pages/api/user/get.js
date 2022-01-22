import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    console.log(token)
    if (!token) {
        res.status(400).json({ message: "Please enter token" });
    }
    const { db, users, doctors } = await connectToDatabase();
    const result = await users.findOne({ token: token });
    // console.log(result)
    if (result) {
        res.status(201).json({ message: "User Found!", user: result });
    }
    else {
        res.status(404).json({ message: "Incorrect token" });
    }
  }
}