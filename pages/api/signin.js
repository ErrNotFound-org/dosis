import { connectToDatabase } from "../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const passw = req.body.password;
    if (!email || !passw) {
      res.status(400).json({ message: "Please enter email and password" });
    }
    const data = {
      email: email,
      password: passw,
    };
    const { db, users, doctors } = await connectToDatabase();
    const result = await users.findOne(data);
    if (result) {
      res.status(201).json({ message: "Logged in successfully", token: result.token });
    } else {
      res.status(201).json({ message: "Incorrect email or password" });
    }
  }
}