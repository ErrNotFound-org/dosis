import Link from "next/link";
import Image from "next/image";
import defaultProfilePic from "../../public/defaultProfilePic.png";
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

    return (
      <div className="h-screen">
        <div className="h-1/12 flex">
          <div className="flex m-[30px]">
            <Link passHref={true} href="/user">
              <a className="mt-[10px]">
                <Image src="/arrow" alt="" width={74.5} height={23} />
              </a>
            </Link>
            <h1 className="font-raleway text-[30px] font-bold text-[#432C81] ml-[20px]">
              Settings
            </h1>
          </div>
        </div>

        <div className="w-screen flex flex-col items-center h-5/6">
          <Image src={defaultProfilePic} alt="" />
          <h1 className="mt-[10px] font-bold font-raleway text-[24px] text-[#432C81]">
            User&apos;s Full Name
          </h1>
          <h1 className="font-raleway text-[14px] text-[#432C81]">
            garapatiakshith@gmail.com
          </h1>

          <form className="rounded-md shadow-md w-[600px] mt-[60px] overflow-y-scroll">
            <div className="p-10">
              <div className="block">
                <label className="font-raleway text-[#432C81] text-[24px]">
                  Blood Group:
                </label>
                <select className="ml-[10px]">
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div className="block mt-[10px]">
                <label className="font-raleway text-[#432C81] text-[24px]">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="border-0 outline-0 border-b-[2px] border-b-solid ml-[10px] w-[225px]"
                />
              </div>
              <div className="block mt-[10px]">
                <label className="font-raleway text-[#432C81] text-[24px]">
                  Gender:
                </label>
                <select className="ml-[10px]">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer Not To Say">Prefer Not to Say</option>
                </select>
              </div>
              <div className="block mt-[10px]">
                <label className="font-raleway text-[#432C81] text-[24px]">
                  Age:
                </label>
                <input
                  type="number"
                  className="border-0 outline-0 border-b-[2px] border-b-solid ml-[10px] w-[50px]"
                />
              </div>
              <div className="block mt-[10px]">
                <label className="font-raleway text-[#432C81] text-[24px]">
                  Allergies (if any):
                </label>
                <textarea
                  className="block shadow-md"
                  name=""
                  id=""
                  cols="60"
                  rows="5"
                ></textarea>
              </div>
              <div className="block mt-[10px]">
                <label className="font-raleway text-[#432C81] text-[24px]">
                  Other Relevant Medical Information:
                </label>
                <textarea
                  className="block shadow-md"
                  name=""
                  id=""
                  cols="60"
                  rows="5"
                ></textarea>
              </div>
              <div className="w-full flex justify-center items-center">
                <button className="bg-[#432C81] p-[10px] rounded-md mt-[15px] font-raleway text-white">
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
