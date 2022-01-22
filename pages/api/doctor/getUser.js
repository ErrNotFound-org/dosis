import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    console.log(token)
    if (!token) {
        res.status(400).json({ message: "Please enter token" });
    }
    const { db, users, doctors } = await connectToDatabase();
    const doctor = await doctors.findOne({ token: token });
    if (doctor) {
        const user = await users.findOne({ _id: req.body.userId });
        if (user) {
            let docs = user.doctors || [];
            if (docs.includes(doctor._id)) {
                res.status(201).json({ message: "User Found!", user: user });
            }else{
                res.status(201).json({ message: "Not Allowed"});
            }
        }else{
            res.status(201).json({ message: "User not found"});
        }
    }else{
        res.status(201).json({ message: "Incorrect token"});
    }
  }
}