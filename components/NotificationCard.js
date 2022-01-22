export default function LabReportCard(props) {
  let color = "";

  if (props.notifType === "labReport") {
    color = "bg-[#7043CF]";
  } else if (props.notifType === "doctorReport") {
    color = "bg-[#FEC62F]";
  } else if (props.notifType === "prescription") {
    color = "bg-[#29C9FB]";
  }

  return (
    <div className="w-[800px] h-[100px] border-[1px] border-solid border-[#EDECF4] rounded-[8px] p-[16px] block my-[20px]">
      <div className="flex">
        <div
          className={
            "w-[10px] h-[10px] rounded-full ${color} flex items-center justify-center mx-0 my-auto" +
            (color === "bg-[#7043CF]"
              ? " bg-[#7043CF]"
              : color === "bg-[#FEC62F]"
              ? " bg-[#FEC62F]"
              : " bg-[#29C9FB]")
          }
        ></div>
        <h1 className="text-[#432C81] font-raleway text-[16px] ml-[20px]">
          {" "}
          {props.notifTitle}
        </h1>
      </div>
      <h2 className="font-inter text-[14px] text-[14px] text-[##7B6BA8]">
        {props.notifDescription}
      </h2>
    </div>
  );
}
