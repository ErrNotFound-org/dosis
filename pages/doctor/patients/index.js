import Link from "next/link";
import Image from "next/image";
import HistoryCard from "../../../components/HistoryCard";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  var variable = 1;

  var user = Cookies.get("user");
  console.log("This is the cookie: " + user);
  const [username, setUsername] = useState("");

  async function getUser(token) {
    const userFound = await axios.post(`/api/doctor/get`, { token });
    console.log(userFound.data);

    // If the token was not found then do the FOLLOWING (DOWN ARROW)

    if (userFound.data.message === "Incorrect token") {
      router.push("/user");
    } else {
      console.log("Hello World");
      setUsername(userFound.data.user.username);
      return userFound;
    }
  }

  if (!user) {
    return <h1>Not LOGGED IN</h1>;
  } else {
    user = JSON.parse(user);
    const userResult = getUser(user.token);
    console.log(userResult);

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
}
