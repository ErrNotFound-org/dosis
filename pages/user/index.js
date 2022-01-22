import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="w-screen flex flex-row justify-center items-center h-1/6 px-[16px] py-[32px]">
        <nav className="w-4/6 h-[56px] drop-shadow-[0_-1px_4px_rgba(0,0,0,0.08)] bg-[#FFFFFF]">
          <div className="grid grid-cols-4 gap-32 flex h-[56px]">
            <div className="justify-center items-center flex h-[56px]">
              <Link passHref={true} href="/user">
                <a>
                  <Image alt="" src="/dashboard.png" width={24} height={24} />
                </a>
              </Link>
            </div>
            <div className="justify-center items-center flex h-[56px]">
              <Link passHref={true} href="/user/lab">
                <a>
                  <Image alt="" src="/labNav.png" width={24} height={24} />
                </a>
              </Link>
            </div>
            <div className="justify-center items-center flex h-[56px]">
              <Link passHref={true} href="/user/notifications">
                <a>
                  <Image
                    alt=""
                    src="/notificationNav.png"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div className="justify-center items-center flex h-[56px]">
              <Link passHref={true} href="/user/settings">
                <a>
                  <Image alt="" src="/settingsNav.png" width={24} height={24} />
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="h-5/6 w-screen flex">
        <div className="w-4/6 flex justify-center items-center">
          <Image src="/userImg.png" alt="" width={294} height={300} />
        </div>
        <div className="w-2/6 flex-col">
          <div className="h-2/6 flex flex-col justify-center items-center text-right float-right">
            <h1 className="font-roboto font- text-[50px] mb-[40px]">
              Hey, Bobby3105
            </h1>
            <hr className="w-[600px] border-solid border-1 border-black" />
          </div>

          <div className="h-4/6 clear-both">
            <h1 className="text-[30px] font-raleway font-bold ml-[40px] mb-[20px]">
              Get Started!
            </h1>

            <Link passHref={true} href="/user/history">
              <a>
                <div className="w-[475px] h-[136px] px-[16px] rounded-[12px] bg-[#EDECF4] flex justify-center items-center mb-[20px]">
                  <div className="grid grid-cols-2 gap-32 place-items-center">
                    <h1 className="font-bold font-raleway text-[20px] text-[#432C81]">
                      Medical History
                    </h1>
                    <Image
                      src="/medicalHistory.png"
                      alt=""
                      width={144}
                      height={108}
                    />
                  </div>
                </div>
              </a>
            </Link>

            <Link passHref={true} href="/user/lab">
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

            <Link passHref={true} href="/user/notifications">
              <a>
                <div className="w-[475px] h-[136px] px-[16px] rounded-[12px] bg-[#EDECF4] flex justify-center items-center mb-[20px]">
                  <div className="grid grid-cols-2 gap-32 place-items-center">
                    <h1 className="font-bold font-raleway text-[20px] text-[#432C81]">
                      Doctor&apos;s Prescription
                    </h1>
                    <Image
                      src="/prescription.png"
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
