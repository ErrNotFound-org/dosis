import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">

    
      <div className="flex flex-col h-screen justify-center items-center">
        <Image
          alt=""
          src="/homePage.png"
          width={461}
          height={347}
          className="block"
        />
        <h1 className="font-roboto font-medium text-[80px] mb-[30px] block">
          Introducing Dosis
        </h1>

        <p className="text-[30px] font-raleway text-[#82799D] mb-[30px]">
          The Only Platform ever needed for patients and doctors
        </p>

        <div className="grid grid-cols-2 gap-32">
          <Link passHref={true} href="/signup">
            <a>
              <button className="w-[274px] h-[88px] border-[5px] solid border-black rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <p className="font-raleway text-[30px]">Create Account</p>
              </button>
            </a>
          </Link>
          <Link passHref={true} href="/login">
            <a>
              <button className="w-[274px] h-[88px] border-[5px] solid border-black rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <p className="font-raleway text-[30px]">Login</p>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
