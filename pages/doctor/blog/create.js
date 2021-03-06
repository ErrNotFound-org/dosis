import Image from "next/image";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/router"



export default function BlogCreate() {
  // setstate
  const[heading, setHeading] = useState('');
  const[Content, setContent] = useState('');
  const[state, setState] = useState("IDLE")
  const[errorMessage, setErrorMessage] = useState(null);



  // Subscribe

  const subscribe = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setErrorMessage(null);

    try {

      const response = await axios.post("/api/blog/create", {
      //  Need to add the userObj
        heading,
        Content
      });
      
      console.log(response);
      const data = response.data;

      console.log(data);

 

      if (response.data.message === "blog inserted!") {
        setState("SUCCESS");
      } else {
        setErrorMessage(response.data.message);
        setState("ERROR");
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.response);
    }
  }

  const router = useRouter();

  
// token place

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
          Get Started
        </h1>
      </div>
      <div className="h-5/6 w-full grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image src="/blogCreate.png" width={800} height={530} />{" "}
        </div>
        <div className="m-[80px] p-[80px] border-[5px] rounded-[15px] border-solid border-[#000000] flex flex-col items-center overflow-y-scroll scrollbar-hide">
          <form>
            <input
              type="text"
              placeholder="Blog Title"
              className="border-[5px] border-solid border-black h-[75px] w-[684px] rounded-[15px] p-[15px] font-roboto text-[15px] block mb-[20px]"
              value= {heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <textarea
              placeholder="Blog Content"
              cols="84"
              rows="40"
              value={Content} onChange={(e) => setContent(e.target.value)}
              className="border-[5px] border-solid border-black rounded-[15px] pl-[23px] font-roboto text-[15px] block mt-[20px] p-[15px]"
            />

            <div onClick={subscribe} className="w-full flex justify-center items-center">
              <button className="bg-[#432C81] p-[10px] text-[24px] font-bold rounded-md mt-[15px] font-raleway text-white 2-[200px] mb-[15px]">
                Submit Blog
              </button>

               {state === "ERROR" && <p>{errorMessage}</p>}
      {state === "SUCCESS" && <p>Success!</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  }
}
