import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.headers.token;
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
        await user.updateOne({"token": token}, data)
        res.status(200)
    }
  }
}