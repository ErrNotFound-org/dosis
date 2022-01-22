import Image from "next/image";
import Link from "next/link";
//auth lock this too.
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";
import { useCookies } from "react-cookie";


export default function Home() {
  
  // creating the cookies for user

  const router = useRouter();

  var user = Cookies.get("user");

  
  const [username, setUsername] = useState("");

  async function getUser(token) {
    const userFound = await axios.post(`/api/doctor/get`, { token });

    
    // If the token was not found then do the FOLLOWING (DOWN ARROW)
    if (userFound.data.message === "Incorrect token"){
          router.push("/user")
    } else{

      setUsername(userFound.data.user.username);
     return userFound;
    }
  }

  const [userId, setUserId] = useState("");
  const [heading, setHeading] = useState("")
  const [reason, setReason] = useState("")
  const [comments, setComments] = useState("")
  const [name, setName] = useState("")
  const [prescriptionReason, setPrescriptionReason] = useState("")
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [time, setTime] = useState()
  
  
  const submitHandler =  async (e) => {
    e.preventDefault()

 
    user = JSON.parse(user);
    const token = getUser(user.token);
    
    
    const response = await axios.post("/api/doctor/patients/post", {
      heading,
      reason,
      doctor,
      token,
      comments,
      userId,
      prescription:{
        name,
        prescriptionReason,
        startDate,
        endDate,
        time
      }
    })
    // Uncaught (in promise) SyntaxError: Unexpected token o in JSON at position 1    
  } 

  if (!user) {
    return <h1>Not LOGGED IN</h1>;
  } else {
    user = JSON.parse(user)
    const userResult = getUser(user.token);

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
            Doctors Form
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
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Heading"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />

            <input
              type="text"
              placeholder="Reason for Visit"
              className="border-[5px] border-solid border-black h-[75px] w-[884px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px]"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <textarea
              placeholder="General Comments"
              cols="110"
              rows="10"
              className="border-[5px] border-solid border-black rounded-[15px] pl-[23px] font-roboto text-[15px] block mt-[20px] p-[15px]"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </form>
          <hr className="border-solid w-[884px] border-[2px]" />
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#432C81] mt-[20px] mr-[20px] ml-[40px]">
              Prescription
            </label>
            <input
              type="text"
              placeholder="Name of the Prescription(s)"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[30px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              Reason
            </label>
            <input
              type="text"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px]"
              value={prescriptionReason}
              onChange={(e) => setPrescriptionReason(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              Start Date
            </label>
            <input
              type="date"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px] pt-[20px]"
              value = {startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              End Date
            </label>
            <input
              type="date"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px] pt-[20px]"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="font-raleway font-bold text-[40px] text-[#000000] mt-[20px] mr-[20px] ml-[40px]">
              Time
            </label>
            <input
              type="time"
              placeholder="Reason for the Prescription"
              className="border-[5px] border-solid border-black h-[35px] w-[374px] rounded-[15px] p-[15px] font-roboto text-[15px] block mt-[20px] pt-[20px]"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <button onClick = {submitHandler} className="bg-[#432C81] p-[10px] rounded-md mt-[15px] font-raleway text-white">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
  }
}

