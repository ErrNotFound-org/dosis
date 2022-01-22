import Link from "next/link";
import Image from "next/image";
import HistoryCard from "../../../components/HistoryCard";

export default function Home() {
  const variable = "1";
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
            Medical History
          </h1>
        </div>
      </div>

      <div className="h-5/6 flex justify-center mt-[70px]">
        <div className="h-5/6 flex flex-col items-center overflow-y-scroll w-5/6 w-[750px] scrollbar-hide">
          <HistoryCard
            reason="Hello World"
            generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
            route={"/doctor/patients/" + variable}
          />
          <HistoryCard
            reason="Hello World"
            generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
            route={"/doctor/patients/" + variable}
          />

          <HistoryCard
            reason="Hello World"
            generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
            route={"/doctor/patients/" + variable}
          />
          <HistoryCard
            reason="Hello World"
            generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
            route={"/doctor/patients/" + variable}
          />
          <HistoryCard
            reason="Hello World"
            generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
            route={"/doctor/patients/" + variable}
          />
          <HistoryCard
            reason="Hello World"
            generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
            route={"/doctor/patients/" + variable}
          />
        </div>
      </div>
    </div>
  );
}
