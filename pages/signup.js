import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

export default function Signup() {
  return (
    <div className="h-screen flex">
      <div className="w-7/12 bg-[#7CB9E8] h-screen pt-32">
        <Image src="/logo.png" width={350} height={300} alt="" />

        <div className="text-center">
          <h1 className="text-[#432C81] text-[40px] font-raleway">Dosis</h1>
          <p className="text-[#432C81] text-[20px] font-raleway m-[30px]">
            Dosis will serve as a website to make healthcare and health
            education easier, <br /> more trackable and more hassle-freely Dosis
            allows for patients to keep a track of all of their visits
            <br /> to the doctor, regardless of which type of doctor it is or
            where the doctor is from. <br />
            Dosis allows you to at a glance understand your visits to the doctor
            and to stay in touch <br />
            and communicate with the doctors you visit. Dosis will also allow
            for <br />
            easier management of the different Patients that a <br />
            doctor has had and to further digitlialize the <br />
            process of written reports.
          </p>
        </div>
      </div>

      <div className="w-5/12 h-screen text-center">
        <div className="h-2/6  align-middle flex flex-col items-center justify-center">
          <h1 className="text-[#432C81] text-[20px] font-raleway font-bold">
            New here?
          </h1>
          <h1 className="text-[#432C81] text-[32px] font-raleway font-bold">
            Sign Up!
          </h1>
        </div>

        <div className="h-4/6  align-middle flex flex-col items-center justify-center">
          <form>
            <input
              type="text"
              className="border-[1px] border-[#EDECF4] border-solid rounded-[8px] w-[327px] h-[46px] placeholder:text-[#432C81] placeholder:text-[16px] font-raleway p-[10px] mb-[20px]"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="border-[1px] border-[#EDECF4] border-solid rounded-[8px] w-[327px] h-[46px] placeholder:text-[#432C81] placeholder:text-[16px] font-raleway p-[10px] mb-[20px] block"
              placeholder="Email"
            />
            <input
              type="password"
              className="border-[1px] border-[#EDECF4] border-solid rounded-[8px] w-[327px] h-[46px] placeholder:text-[#432C81] placeholder:text-[16px] font-raleway p-[10px] mb-[20px]"
              placeholder="Password"
            />

            <button className="bg-[#432C81] block text-white mt-[70px] rounded-[8px] w-[327px] h-[42px] font-raleway p-[10px] mb-[20px]">
              Sign Up
            </button>

            <p className="text-[#82799D] font-raleway text-[14px]">
              Already have an account?{" "}
              <Link passHref={true} href="/login">
                <a>
                  <span className="text-[#432C81]">Log In</span>
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
