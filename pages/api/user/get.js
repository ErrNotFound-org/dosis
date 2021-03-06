import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    console.log(token + " This is from the get request")
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
        res.status(201).json({ message: "Incorrect token" });
        console.log('Incorrect token')
    }
  }
}