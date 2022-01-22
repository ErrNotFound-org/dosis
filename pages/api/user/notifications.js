import { connectToDatabase } from "../../../models/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body.token;
    const { db, users, doctors } = await connectToDatabase();
    const user = await users.findOne({ token: token });
    if (user){
        const date = new Date();
        const timeNow = date.getHours()+date.getMinutes()+date.getSeconds();
        const dateNow = date.getFullYear()+date.getMonth()+date.getDate();
        const medicalHistory = user.medicalHistory;
        let notifications = user.notifications;

        for(let dahistory of medicalHistory){
          let hisdate = new Date(dahistory.prescription.Time);
          let hisstartdate = new Date(dahistory.prescription.StartDate);
          let hisenddate = new Date(dahistory.prescription.EndDate);

          let hisTime = hisdate.getHours()+hisdate.getMinutes()+hisdate.getSeconds();
          let hisstartdateNow = hisstartdate.getFullYear()+hisstartdate.getMonth()+hisstartdate.getDate();
          let hisenddateNow = hisenddate.getFullYear()+hisenddate.getMonth()+hisenddate.getDate();

          if (timeNow > hisTime && dateNow > hisstartdateNow && dateNow < hisenddateNow){
            const notif = {
              notifType: "prescription",
              notifTitle: dahistory.prescription.name,
              notifDescription: dahistory.prescription.reason,
              on: new Date(),
            }
            notifications.push(notif);
          }
        }
        res.status(201).json({ message: "Success", notifications: notifications });
    }else{
      res.status(201).json({ message: "Invalid Token!" })
    }
  }
}