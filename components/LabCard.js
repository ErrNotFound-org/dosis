import Image from "next/image";

export default function HistoryCard(props) {
  return (
    <div className="h-[277px] w-[712px] rounded-[12px] m-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.16)]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex">
          <span className="pt-[10px]">
            <Image src="/defaultProfilePic" alt="" width={45.6} height={43.2} />
          </span>

          <h2 className="text-[#7B6BA8] font-raleway text-[24px] pt-[8px] px-[16px]">
            {props.heading}
          </h2>
        </div>

        <h1 className="font-raleway text-[16px] text-[#432C81] px-[16px] py-[16px]">
          {props.date}
        </h1>
      </div>

      {/* Add button to view the post in full */}
      <div className="w-full  flex justify-center p-[10px]">
        <a href={props.link}>
          <div className="bg-[#432C81] p-[10px] rounded-md mt-[15px] font-raleway text-white">
            {" "}
            Open Report
          </div>
        </a>
      </div>
    </div>
  );
}
