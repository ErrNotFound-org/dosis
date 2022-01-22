import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://DosisAdmin:ohyesnicenicepassword@dosisdata.cnont.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db("dosisdata");

  const users = db.collection("user");
  const doctors = db.collection("Doctor");
  return { db, users, doctors };
}
