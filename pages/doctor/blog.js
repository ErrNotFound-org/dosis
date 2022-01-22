import Image from "next/image";

export default function BlogIntroduction() {
  return (
    <div className="h-screen p-[40px] w-screen">
      <div className="w-screen h-1/6 flex justify-center items-center w-full">
        <h1 className="font-roboto font-bold text-[80px] text-[#9966CC]">
          Have content?
        </h1>
      </div>
      <div className="h-5/6 w-full grid grid-cols-2">
        <div>
          <Image src="/blogInfographics.png" width={400} height={265} />{" "}
        </div>
        <div></div>
      </div>
    </div>
  );
}
