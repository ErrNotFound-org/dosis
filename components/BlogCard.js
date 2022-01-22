import Image from "next/image";
import Link from "next/link";
export default function BlogCard(props) {
  return (
    <div className="w-[800px] h-[400px] border-[2px] border-solid border-[#EDECF4] rounded-[8px] p-[16px] block my-[20px]">
      <Link passHref={true} href={"/blogs/" + props.id}>
        <a>
          <div className="flex h-4/6">
            <Image src="/defaultProfilePic.png" height={54} width={57} />

            <div className="h-full flex flex-col justify-center items-center">
              <div className="flow-root">
                <h1 className="text-[#432C81] font-raleway text-[18px] ml-[10px] block">
                  {" "}
                  {props.blogTitle}
                </h1>

                <h1 className="block font-inter text-[10px] text-[#7B6BA8] mt-[10px] ml-[10px]">
                  By {props.author}
                </h1>
              </div>
            </div>
          </div>

          <h2 className="font-inter text-[14px] text-[##7B6BA8] mt-[10px]">
            {props.blogStart}
          </h2>
        </a>
      </Link>
    </div>
  );
}
