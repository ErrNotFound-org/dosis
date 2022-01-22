import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/router"

import Image from "next/image";

export default function Home() {
  const router = useRouter()
  var user = Cookies.get("user");
  console.log("This is the cookie: " + user)
  const [username, setUsername] = useState("");

  async function getUser(token) {
    const userFound = await axios.post(`/api/doctor/get`, { token });
    console.log(userFound.data);
  
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
        <div className="w-screen flex flex-row justify-center items-center h-1/6 px-[16px] py-[32px]">
          <nav className="w-4/6 h-[56px] drop-shadow-[0_-1px_4px_rgba(0,0,0,0.08)] bg-[#FFFFFF]">
            <div className="grid grid-cols-3 gap-32 flex h-[56px]">
              <div className="justify-center items-center flex h-[56px]">
                <Link passHref={true} href="/doctor">
                  <a>
                    <Image alt="" src="/dashboard.png" width={24} height={24} />
                  </a>
                </Link>
              </div>
              <div className="justify-center items-center flex h-[56px]">
                <Link passHref={true} href="/doctor/lab">
                  <a>
                    <Image alt="" src="/labNav.png" width={24} height={24} />
                  </a>
                </Link>
              </div>
              <div className="justify-center items-center flex h-[56px]">
                <Link passHref={true} href="/doctor/patients">
                  <a>
                    <Image alt="" src="/labNav.png" width={24} height={24} />
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="h-5/6 w-screen flex">
          <div className="w-4/6 flex flex-col justify-center items-center">
            <Link passHref={true} href="/doctor/patients/create">
              <a>
                <div className="border-[5px] border-solid border-[#000000] rounded-[15px] p-[26px] w-[350px] flex justify-center items-center">
                  <h1 className="font-raleway font-bold text-[40px]">
                    New Patients
                  </h1>
                </div>
              </a>
            </Link>
            <Link passHref={true} href="/doctor/lab/create">
              <a>
                <div className="border-[5px] border-solid border-[#000000] rounded-[15px] p-[26px] w-[350px] flex justify-center items-center mt-[30px]">
                  <h1 className="font-raleway font-bold text-[40px]">
                    New Lab
                  </h1>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-2/6 flex-col">
            <div className="h-2/6 flex flex-col justify-center items-center text-right">
              <h1 className="font-roboto font- text-[50px] mb-[40px]">
                Hey, {username}!
              </h1>
              <hr className="w-[600px] border-solid border-1 border-black" />
            </div>

            <div className="h-4/6 clear-both">
              <h1 className="text-[30px] font-raleway font-bold ml-[40px] mb-[20px]">
                Get Started!
              </h1>

              <Link passHref={true} href="/doctor/patients">
                <a>
                  <div className="w-[475px] h-[136px] px-[16px] rounded-[12px] bg-[#EDECF4] flex justify-center items-center mt-[60px] mb-[60px]">
                    <div className="grid grid-cols-2 gap-32 place-items-center">
                      <h1 className="font-bold font-raleway text-[20px] text-[#432C81]">
                        Patients
                      </h1>
                      <Image
                        src="/doctorPatientsIcon.png"
                        alt=""
                        width={144}
                        height={108}
                      />
                    </div>
                  </div>
                </a>
              </Link>

              <Link passHref={true} href="/doctor/lab">
                <a>
                  {" "}
                  <div className="w-[475px] h-[136px] px-[16px] rounded-[12px] bg-[#EDECF4] flex justify-center items-center mb-[20px]">
                    <div className="grid grid-cols-2 gap-32 place-items-center">
                      <h1 className="font-bold font-raleway text-[20px] text-[#432C81]">
                        Lab Results
                      </h1>
                      <Image
                        src="/labReports.png"
                        alt=""
                        width={144}
                        height={108}
                      />
                    </div>
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
