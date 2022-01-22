import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-1/6">
        <div className="pl-[30px] pt-[30px]">
          <Link passHref={true} href="/doctor">
            <a>
              <div></div>
            </a>
          </Link>
        </div>

        <div className="w-screen flex justify-center items-center">
          <h1 className="font-bold font-raleway text-[#432C81] text-[40px] my-[40px]">
            Doctors Lab Form
          </h1>
        </div>
      </div>

      <div className="h-4/6 flex justify-center mt-[70px] overflow-y-scroll scrollbar-hide">
        <div className="h-5/6 flex flex-col items-center  w-5/6">
          <form className="m-[20px]">
            <input
              type="text"
              placeholder="USER ID"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block mb-[20px]"
            />
            <input
              type="text"
              placeholder="Reason for Test"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block mb-[20px]"
            />
            <input
              type="text"
              placeholder="Link To Report"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block"
            />

            <input
              type="Date"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px]  block mt-[20px]"
            />
            <div className="w-full justify-center items-center">
              <button className="bg-[#432C81] p-[10px] rounded-md mt-[15px] font-raleway text-white">
                Submit Lab
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
