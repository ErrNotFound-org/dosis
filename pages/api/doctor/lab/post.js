import { connectToDatabase } from "../../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.headers.token;
    // console.log(token)
    const { db, users, doctors } = await connectToDatabase();
    const doctor = await doctors.findOne({ token: token });
    if (doctor){
      const data = {
        heading: req.body.heading,
        description: req.body.description,
        date: req.body.date,
        fileLink: req.body.fileLink,
        user: req.body.userid,
        doctor: doctor._id,
      };
      const notif = {
        notifType: "labReport",
        notifTitle: req.body.heading,
        notifDescription: req.body.description,
        on: new Date(),
      }
        const user = users.findOne({ _id: data.user });
        if (user){
          await doctors.updateOne({ _id: doctor._id }, { $push: { labResults: data } }, { upsert: true });
          await users.updateOne({ _id: data.user }, { $push: { labResults: data } }, { upsert: true });
          await users.updateOne({ _id: data.user }, { $push: { notifications: notif } }, { upsert: true });
          res.status(201).json({ message: "Data inserted!", data: data });
        }
      };
    }
    res.status(201)
  }