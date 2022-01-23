import BlogCard from "../../components/BlogCard";
import { connectToDatabase } from "../../models/db";




export default function Home({ movies }) {
  return (
    
    <div className="h-screen">
      <div className="h-1/6">
        <div className="m-[60px]">
          <h1 className="font-raleway text-[60px] font-bold text-[#432C81]">
            <div>
            <ul>
        {movies.map((movie) => {
          console.log(movie)
          return (
          <li>
            <h2>{movie.heading}</h2>
            </li>
          )
        })}
        </ul>
      
            </div>
          </h1>
        </div>
      </div>
      <div className="flex h-5/6 justify-center items-center">
        <div className="h-full p-[40px] flex flex-col justify-center items-center overflow-y-scroll scrollbar-hide pt-[40px]">


          {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author="CoolDoctor" // gotta add this. to the user
            id={1}
          />
            )
          })}
            {movies.map((movie) => {
            return(
            <BlogCard
            blogTitle={movie.heading}
            blogStart = {movie.body}
            author={movie.author} // gotta add this. to the user
            id={1}
          />
            )
          })}
          <BlogCard
            notifType="doctorReport"
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={2}
          />
          <BlogCard
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={3}
          />

          <BlogCard
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={4}
          />
          <BlogCard
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={5}
          />
          <BlogCard
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={6}
          />
          <BlogCard
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={7}
          />
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

