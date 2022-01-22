import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function BlogIntroduction() {

  const router = useRouter();


  var user = Cookies.get("user");
  console.log("This is the cookie: " + user)
  const [username, setUsername] = useState("");

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
    <div className="h-screen p-[40px] w-screen">
      <div className="w-screen h-1/6 flex justify-center items-center w-full">
        <h1 className="font-roboto font-bold text-[80px] text-[#9966CC]">
          Have content?
        </h1>
      </div>
      <div className="h-5/6 w-full grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image src="/blogInfographics.png" width={800} height={530} />{" "}
        </div>
        <div className="flex justify-center items-center">
          <div className=" border-solid border-[5px] border-[#000000] rounded-[15px] p-[80px] flex flex-col justify-center items-center h-[468px] w-[727px]">
            <h1 className="font-roboto text-[40px] font-bold">
              Have Content? That’s Wonderful! Get started with our blogs
              feature, share your thoughts,experience,ideas contribution and
              more!
            </h1>

            <Link passHref={true} href="/doctor/blog/create">
              <a>
                <div className="h-[63px] w-[387px] justify-center items-center flex bg-[#432C81] rounded-[15px] mt-[40px]">
                  <h1 className="font-raleway text-[#ffffff] text-[40px] font-bold">
                    Get Started
                  </h1>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
