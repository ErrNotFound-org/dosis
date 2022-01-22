
import Link from "next/link";
import Image from "next/image";
import LabCard from "../../../components/LabCard";

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
            Lab Results
          </h1>
        </div>
      </div>

      <div className="h-5/6 flex justify-center mt-[70px]">
        <div className="h-5/6 flex flex-col items-center overflow-y-scroll w-5/6 w-[750px] scrollbar-hide">
          <LabCard
            date="20/01/2022"
            heading="Blood Test"
            link="https://github.com/Bobby3105"
          />
          <LabCard
            date="20/01/2022"
            heading="Blood Test"
            link="https://github.com/Bobby3105"
          />

          <LabCard
            date="20/01/2022"
            heading="Blood Test"
            link="https://github.com/Bobby3105"
          />
          <LabCard
            date="20/01/2022"
            heading="Blood Test"
            link="https://github.com/Bobby3105"
          />
          <LabCard
            date="20/01/2022"
            heading="Blood Test"
            link="https://github.com/Bobby3105"
          />
          <LabCard
            date="20/01/2022"
            heading="Blood Test"
            link="https://github.com/Bobby3105"
          />
        </div>
      </div>
    </div>
  );
}
