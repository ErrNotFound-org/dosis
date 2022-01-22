import BlogCard from "../../components/BlogCard";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-1/6">
        <div className="m-[60px]">
          <h1 className="font-raleway text-[60px] font-bold text-[#432C81]">
            Blogs
          </h1>
        </div>
      </div>
      <div className="flex h-5/6 justify-center items-center">
        <div className="h-full p-[40px] flex flex-col justify-center items-center overflow-y-scroll scrollbar-hide pt-[40px]">
          <BlogCard
            notifType="doctorReport"
            blogTitle="Blog Title"
            blogStart="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            author="CoolDoctor"
            id={1}
          />
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
