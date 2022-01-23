import BlogCard from "../../components/BlogCard";
import { connectToDatabase } from "../../models/db";




export default function Home({ movies }) {
  return (
    
    <div className="h-screen">
      <div className="h-1/6">
        <div className="m-[60px]">
          <h1 className="font-raleway text-[60px] font-bold text-[#432C81]">Blogs</h1>
      </div>
      <div className="flex h-5/6 justify-center items-center">
        <div className="h-full p-[40px] flex flex-col justify-center items-center overflow-y-scroll scrollbar-hide pt-[40px]">


          {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="CoolDoctor" // gotta add this. to the user
          />
            )
          })}
            {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author={movie.author} // gotta add this. to the user
          />
            )
          })}
          {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="Cool Doctor" // gotta add this. to the user
          />
            )
          })}
          

          {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="Cool Doctor" // gotta add this. to the user
          />
            )
          })}
             {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="Cool Doctor" // gotta add this. to the user
          />
            )
          })}
             {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="Cool Doctor" // gotta add this. to the user
          />
            )
          })}
        
        {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="Cool Doctor" // gotta add this. to the user
          />
            )
          })}
          
             {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="Cool Doctor" // gotta add this. to the user
            id={3}
          />
            )
          })}
        </div>
      </div>
    </div>
    </div>
  );


}

export  async function getServerSideProps(){
  const { db } = await connectToDatabase()

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

