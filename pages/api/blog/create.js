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


export default async function handler(req, res){
    if(!req.method === "POST"){
        console.logI("Not a POST REQ!")
    }
    if(req.method === "POST"){
        const heading = req.body.heading
        const body = req.body.Content

        if(!heading || !body){
            res.status(400).json({message:"Please enter the Heading and the body"})
        }

        const data = {
            // this is tetsing data sent to the db
            id:makeid(10),
            token: makeid(10),
            heading: heading,
            body: body
            
        };
        const{db, users, doctors, blogs} = await connectToDatabase();
        const result = await  blogs.insertOne(data);
        res.status(201).json({message: "blog inserted!", token: data.token})
        console.log(result)
    }

}