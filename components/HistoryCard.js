import Link from "next/link";

export default function HistoryCard(props) {
  return (
    <div className="h-[277px] w-[712px] rounded-[12px] m-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.16)]">
      <h1 className="font-raleway text-[16px] text-[#432C81] px-[16px] py-[24px]">
        {props.reason}
      </h1>
      <h2 className="text-[#7B6BA8] font-raleway text-[14px] py-[8px] px-[16px]">
        {props.generalComments}
      </h2>
      {/* Add button to view the post in full */}

      <div>
        <Link href={props.route}>
          <a>
            <div className="w-full  flex justify-center p-[10px]">
              <div className="bg-[#432C81] p-[10px] rounded-md mt-[15px] font-raleway text-white">
                {" "}
                View Post
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
