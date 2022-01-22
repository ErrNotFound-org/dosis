import { connectToDatabase } from "../../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    const token = req.body.token;
    // console.log(token)
    const { db, users, doctors } = await connectToDatabase();
    const doctor = await doctors.findOne({ token: token });
    if (doctor){
      const data = {
        id: makeid(10),
        heading: req.body.heading,
        reason: req.body.reason,
        comments: req.body.comments,
        user: req.body.userid,
        doctor: doctor._id,
        prescription: {
          name: req.body.nameOfPrescription,
          prescriptionReason: req.body.prescriptionReason,
          startDate: req.body.StartDate,
          endDate: req.body.EndDate,
          time: req.body.Time,
        }
      };
      const notif = {
        notifType: "doctorReport",
        notifTitle: req.body.heading,
        notifDescription: req.body.reason,
        on: new Date(),
      }
        const user = users.findOne({ _id: data.user });
        if (user){
          await doctors.updateOne({ _id: doctor._id }, { $push: { medicalHistory: data } }, { upsert: true });
          await users.updateOne({ _id: data.user }, { $push: { medicalHistory: data } }, { upsert: true });
          await users.updateOne({ _id: data.user }, { $push: { notifications: notif } }, { upsert: true });
          res.status(201).json({ message: "Data inserted!", data: data });
        }else{
          res.status(201).json({ message: "User Not Found!" })
        }
      }else{
        res.status(201).json({ message: "Invalid Token!" })
      }
    }
    res.status(201)
}