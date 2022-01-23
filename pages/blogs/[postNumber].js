import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { connectToDatabase } from "../../models/db";

export default function Home({ movies }) {
  const router = useRouter();
  const id = router.query.postNumber;

  return (
    // <div className="h-screen">
    //   <div className="h-1/6">
    //     <div className="pl-[30px] pt-[30px]">
    //       <Link passHref={true} href="/user/history">
    //         <a>
    //           <div></div>
    //           <Image src="/arrow.png" width={149} height={46} alt="" />
    //         </a>
    //       </Link>
    //     </div>

    //     <div className="w-screen flex flex-col justify-center items-center">
    //       <h1 className="font-bold font-raleway text-[#432C81] text-[60px] mt-[40px]">
    //         Blog Title
    //       </h1>
    //       <h1 className="font-bold font-raleway text-[30px] mb-[40px]">
    //         By CoolDoctor
    //       </h1>
    //     </div>

    //     <div className="h-5/6 w-4/6 flex flex-col justify-center items-center border-[5px] border-solid border-[#000000]"></div>
    //   </div>
    // </div>

    <div className="h-screen">
      <div className="h-1/6">
        <div className="m-[60px]">
          <h1 className="font-raleway text-[60px] font-bold text-[#432C81]">
            Blogs
          </h1>
          <h2>
          {movies.map((movie) => {
          console.log(movie)
          return (
          <li>
            <h2>{movie.body}</h2>
            </li>
          )
        })}
          </h2>
        </div>
      </div>
      <div className="flex h-4/6 p-[40px] overflow-y-scroll">
        <h1 className="font-raleway text-[18px]">
        
        </h1>
      </div>
    </div>
  );
}

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
      movies : movies.map(movie => ({body: movie.body}))
    },
  };
}
