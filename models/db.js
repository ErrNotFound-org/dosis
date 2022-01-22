import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://DosisAdmin:ohyesnicenicepassword@dosisdata.cnont.mongodb.net"
  );
  const db = client.db();
  const users = db.collection("users");
  const doctors = db.collection("Doctor");
  return { db, users, doctors };
}
