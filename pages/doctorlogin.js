import Image from "next/image";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {

  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [state, setState] = useState("IDLE");

  const subscribe = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/doctor/signin", {
        email,
        password,
      });

      const data = response.data;
      setCookie("user", JSON.stringify(data), {
        path: "/",
        maxAge: 3600, // 1 hr
        sameSite: true,
      });

      console.log(data);

      if (response.data.message === "Logged in successfully") {
        router.push("/doctor");
        setState("SUCCESS");
      } else {
        setErrorMessage(response.data.message);
        setState("ERROR");
      }

      console.log("Hello World");
    } catch (e) {
    
      setErrorMessage(e.response);
      // setState("ERROR");
    }
  };


  return (
    <div className="h-screen w-screen grid grid-cols-2">
      <div className="bg-[#6CB4EE]">
        <div className="h-2/6 flex justify-center items-center text-white text-[50px] font-bold font-inter border-b-[1px] border-b-solid">
          <h1>Hi. Are you A Doctor?</h1>
        </div>
        <div className="h-4/6 justify-center flex items-center p-[40px] flex-col">
          <h1 className="font-inter font-bold text-[50px] text-white mb-[10px]">
            Login
          </h1>

          <form>
            <div className="m-[10px]">
              <label className="text-[30px] font-inter font-bold text-white">
                Email ID:
              </label>
              <input
                type="email"
                className="block mt-[20px] h-[73px] w-[722px] rounded-[10px] p-[20px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-[10px]">
              <label className="text-[30px] font-inter font-bold text-white">
                Password:
              </label>
              <input
                type="password"
                className="block mt-[20px] h-[73px] w-[722px] rounded-[10px] p-[20px]"
                 value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full flex justify-center items-center">
                <button        onClick={subscribe} className="m-[20px] bg-white p-[10px] px-[20px] rounded-md font-raleway text-[#6CB4EE]">
                  Submit
                </button>

                  {state === "ERROR" && <p>{errorMessage}</p>}
                {state === "SUCCESS" && <p>Success!</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#e4e4e4] h-screen">
        <div className="h-1/2 flex justify-center items-center">
          <Image
            src="/doctorLogIn.png"
            alt=""
            width={835.89}
            height={468.63}
          />
        </div>
        <div className="h-1/2 flex justify-center items-center p-[100px]">
          <h1 className="font-inter font-bold text-[20px]">
            Have you ever wondered, why there isn &apos;t a single management
            platform for all our health needs? One that maintains not only the
            entirety of the patient&apos;s medical history and lab results but
            that also serves you. The Doctor. Dosis was built with both medical
            professionals and patients in mind to provide the best possible
            medical experience possible. We are here to help you. We are here to
            make healthcare easier. Share your thoughts in the Doctor &apos;s
            blog to spread awareness to the rest of the community, our team
            verifies you as a doctor before you can post. If you &apos;re a
            doctor reach out to us and we &apos;ll get you set up ;)
          </h1>
        </div>
      </div>
    </div>
  );
}
