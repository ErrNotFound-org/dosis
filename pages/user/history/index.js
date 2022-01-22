import Link from "next/link";
import Image from "next/image";
import HistoryCard from "../../../components/HistoryCard";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  var user = Cookies.get("user");
  const [username, setUsername] = useState("");

  async function getUser(token) {
    const userFound = await axios.post(`/api/user/get`, { token });
    console.log(userFound.data);
    setUsername(userFound.data.user.username);
    return userFound;
  }

  if (!user) {
    return <h1>Not LOGGED IN</h1>;
  } else {
    user = JSON.parse(user);
    user = getUser(user.token);

    const variable = "1";
    return (
      <div className="h-screen">
        <div className="h-1/6">
          <div className="pl-[30px] pt-[30px]">
            <Link passHref={true} href="/user">
              <a>
                <div></div>
                <Image src="/arrow" width={149} height={46} alt="" />
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
              route={"/user/history/" + variable}
            />
            <HistoryCard
              reason="Hello World"
              generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
              route={"/user/history/" + variable}
            />

            <HistoryCard
              reason="Hello World"
              generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
              route={"/user/history/" + variable}
            />
            <HistoryCard
              reason="Hello World"
              generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
              route={"/user/history/" + variable}
            />
            <HistoryCard
              reason="Hello World"
              generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
              route={"/user/history/" + variable}
            />
            <HistoryCard
              reason="Hello World"
              generalComments="Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid, fugit magnam distinctio eligendi animi adipisci necessitatibus aperiam perspiciatis corporis reprehenderit fuga, facilis alias eveniet."
              route={"/user/history/" + variable}
            />
          </div>
        </div>
      </div>
    );
  }
}
