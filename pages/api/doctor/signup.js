import { connectToDatabase } from "../../../models/db";

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const passw = req.body.password;
    if (!email || !passw || !name) {
      res.status(400).json({ message: "Please enter email, password and name" });
    }
    const data = {
      _id: makeid(10),
      token: makeid(10),
      email: email,
      username: name,
      password: passw,
      bloodGroup: "",
      contactNumber: "",
      Gender: "",
      age: "",
      medicalHistory: [],
      waitList: [],
      labResults: []
    };
    const { db, users, doctors } = await connectToDatabase();
    const exists = await doctors.findOne({ email: email });
    if (exists) {
      res.status(201).json({ message: "Email already registered" });
    } else {
      const result = await doctors.insertOne(data);
      res.status(201).json({ message: "Data inserted!", token: data.token  });
    }
  }
}