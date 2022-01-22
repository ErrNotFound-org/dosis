import { connectToDatabase } from "../../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.headers.token;
    const { db, users, doctors } = await connectToDatabase();
    const doctor = await doctors.findOne({ token: token });
    if (doctor){
        const blogID = req.body.blogID;
        const blog = await db.collection("blogs").findOne({ _id: blogID });
        if (blog){
            res.status(200).json({ blog: blog });
        }else{
          res.status(201).json({ message: "Invalid Blog ID!" });
      }
    }else{
      res.status(201).json({ message: "Invalid Token!" });
    }
    res.status(201)
  }
}