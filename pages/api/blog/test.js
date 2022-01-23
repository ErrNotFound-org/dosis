import { connectToDatabase } from "../../../models/db";
export default async (req, res) => {
    const { db } = await connectToDatabase();
    const movies = await db
      .collection("blogs")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
    res.json(movies);
    console.log(movies)
    const x = movies
    var test = x.map(movies => movies.heading)
    console.log(test)

}