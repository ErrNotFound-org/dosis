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
              <Image src="/arrow.png" width={149} height={46} alt="" />
            </a>
          </Link>
        </div>

        <div className="w-screen flex justify-center items-center">
          <h1 className="font-bold font-raleway text-[#432C81] text-[40px] my-[40px]">
            Doctors Form
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
              placeholder="Heading"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block"
            />

            <input
              type="text"
              placeholder="Reason for Visit"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px]"
            />

            <textarea
              placeholder="General Comments"
              cols="110"
              rows="10"
              className="border-[5px] border-solid border-black rounded-[15px] pl-[23px] font-roboto text-[15px] block mt-[20px] p-[15px]"
            ></textarea>
          </form>
          <hr className="border-solid w-[884px] border-[2px]" />
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#432C81] mt-[20px] mr-[20px] ml-[40px]">
              Prescription
            </label>
            <input
              type="text"
              placeholder="Name of the Prescription(s)"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[30px]"
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              Reason
            </label>
            <input
              type="text"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px]"
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              Start Date
            </label>
            <input
              type="date"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px] pt-[20px]"
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              End Date
            </label>
            <input
              type="date"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px] pt-[20px]"
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              Time
            </label>
            <input
              type="time"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px] pt-[20px]"
            />
          </div>

          <button className="bg-[#432C81] p-[10px] rounded-md mt-[15px] font-raleway text-white">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}
