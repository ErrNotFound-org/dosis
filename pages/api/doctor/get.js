import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    console.log(token)
    if (!token) {
        res.status(400).json({ message: "Please enter token" });
        console.log("Empty token is reaching us")
    }
    const { db, users, doctors } = await connectToDatabase();
    const result = await doctors.findOne({ token: token });
    // console.log(result)
    if (result) {
        res.status(201).json({ message: "User Found!", user: result });
        console.log("User has been found in the backend")
    }
    else {
        res.status(201).json({ message: "Incorrect token" });
        console.log("INCORRECT TOKEN")
    }
  }
}