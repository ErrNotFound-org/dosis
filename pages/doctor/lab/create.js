import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/router"

export default function Home() {

  const router = useRouter();

  var user = Cookies.get("user");
  console.log("This is the cookie: " + user)
  

  const[reason, setReason] = useState("");
  const[date, setDate] = useState("");
  const[Link, SetLink] = useState("");
  const[userId, setUserId] = useState("");

  

  async function getUser(token) {
    const userFound = await axios.post(`/api/doctor/get`, { token });
    console.log(userFound.data);
    
    // If the token was not found then do the FOLLOWING (DOWN ARROW)
  
    if (userFound.data.message === "Incorrect token"){

          router.push("/user")
    } else{
      console.log("Hello World")
   setUsername(userFound.data.user.username);
     return userFound;
    }
    
 
   
  }

    if (!user) {
    return <h1>Not LOGGED IN</h1>;
  } else {

    user = JSON.parse(user);
    const userResult = getUser(user.token);
    console.log(userResult)
    

  return (
    <div className="h-screen">
      <div className="h-1/6">
        <div className="pl-[30px] pt-[30px]">
          <Link passHref={true} href="/doctor">
            <a>
              <div>
                 <Image src="/arrow.png" width={149} height={46} alt="" />
              </div>
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
              value = {userId}
              onChange = {(e) => setUserId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Reason for Test"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block mb-[20px]"
              value = {reason}
              onChange = {(e) => setReason(e.target.value)}
            />
            <input
              type="text"
              placeholder="Link To Report"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block"
               value = {link}
              onChange = {(e) => setLink(e.target.value)}
            />

            <input
              type="Date"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px]  block mt-[20px]"
                 value = {date}
              onChange = {(e) => setDate(e.target.value)}
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
}
