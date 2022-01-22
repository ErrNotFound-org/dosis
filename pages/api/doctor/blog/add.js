import { connectToDatabase } from "../../../../models/db";

export default async function handler(req, res) {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

  if (req.method === "POST") {
    const token = req.body.token;
    // console.log(token)
    const { db, users, doctors } = await connectToDatabase();
    const doctor = await doctors.findOne({ token: token });
    if (doctor){
        const heading = req.body.heading;
        const blog = req.body.blog;
        const data = {
            _id: makeid(15),
            heading: heading,
            blog: blog,
            by: {
                id: doctor._id, 
                name: doctor.username
            },
            date: new Date()
        };
        await db.collection("blogs").insertOne(data);
        await db.collection("doctors").updateOne({ _id: doctor._id }, { $push: { blogs: data._id } });
        res.status(200).json({ message: "Blog added" });
      }else{
        res.status(201).json({ message: "Invalid Token!" });
      }
    }
    res.status(201)
  }