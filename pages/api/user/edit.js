import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    const { db, users, doctors } = await connectToDatabase();
    const user = await users.findOne({ token: token });
    if (user){
        const data = {
            fullName: req.body.fullname,
            bloodGroup: req.body.bloodGroup,
            gender: req.body.gender,
            allergies: req.body.allergies,
            otherMedicalInformation: req.body.otherMedicalInformation
        }
        const doctorid = req.body.doctor
        if (doctorid!=""){
          let doctor = await doctors.findOne({ _id: doctorid });
          if (doctor){
            await users.updateOne({ _id: user._id }, { $push: { doctors: doctorid } }, { upsert: true });
          }
          await user.updateOne({"token": token}, data)
        }
        res.status(200)
    }else{
      res.status(201).json({ message: "Invalid Token!" })
    }
  }
}