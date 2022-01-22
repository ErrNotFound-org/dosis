import Image from "next/image";

export default function Home() {
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
                className="block mt-[20px] h-[73px] w-[722px] rounded-[10px]"
              />
            </div>
            <div className="m-[10px]">
              <label className="text-[30px] font-inter font-bold text-white">
                Password:
              </label>
              <input
                type="password"
                className="block mt-[20px] h-[73px] w-[722px] rounded-[10px]"
              />
              <div className="w-full flex justify-center items-center">
                <button className="m-[20px] bg-white p-[10px] px-[20px] rounded-md font-raleway text-[#6CB4EE]">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#e4e4e4] h-screen">
        <div className="h-1/2 flex justify-center items-center">
          <Image
            src="./doctorLogIn.png"
            alt=""
            width={835.89}
            height={468.63}
          />
        </div>
        <div className="h-1/2 flex justify-center items-center p-[100px]">
          <h1 className="font-inter font-bold text-[20px]">
            Have you ever wondered, why there isn &apos;t a single management
            platform for all our health needs? One that maintains not only the
            entiretry of the patient&apos;s medical history and lab results but
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
