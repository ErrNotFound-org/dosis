import BlogCard from "../components/BlogCard"
import { connectToDatabase } from "../models/db"
export default function test({ movies }){

  console.log(movies)
    return(
        <ul>
        {movies.map((movie) => {
          console.log(movie)
          return (
          <li>
            <h2>{movie.heading}</h2>
            </li>
          )
        })}
        {/* worked! thanks! */} 


        {/* {movies.map((movie) => {
          <li>
            <p className="text-black">{movie.heading}</p>
         
            

          </li>
    
        })} */}
      </ul>
    
    

    )


}
// hey!

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
  
    const movies = await db
      .collection("blogs")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
      console.log(movies)

     
  
    return {
      props: {
        movies : movies.map(movie => ({heading: movie.heading}))
      },
    };
  }