import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const router = useRouter();
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

    const id = router.query.postNumber;

    return (
      <div className="h-screen">
        <div className="h-1/6">
          <div className="pl-[30px] pt-[30px]">
            <Link passHref={true} href="/user/history">
              <a>
                <div></div>
                <Image src="/arrow" w={149} h={46} alt="" />
              </a>
            </Link>
          </div>

          <div className="w-screen flex justify-center items-center">
            <h1 className="font-bold font-raleway text-[#432C81] text-[40px] my-[40px]">
              Doctors Form
            </h1>
          </div>
        </div>
        <div className="h-4/6 flex justify-center">
          <div className="h-full overflow-y-scroll scrollbar-hide items-center mt-[50px] w-4/6 p-[20px] border-solid border-[5px] border-[#000000] rounded-[15px] m-[50px]">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="font-bold font-raleway text-[50px]">Heading</h1>
              <h2 className="font-bold font-raleway text-[40px] mt-[20px]">
                Doctor Name
              </h2>
              <h2 className="font-raleway text-[40px] mt-[20px] text-[#432C81]">
                Date
              </h2>

              <div className="flex m-[15px] justify-center items-center">
                <div className="h-full w-full flex justify-center items-center w-1/4">
                  <label className="font-bold font-raleway text-[20px]">
                    Reason for visit
                  </label>
                </div>
                <div className="overflow-y-scroll h-[150px] w-3/4">
                  <h2 className="font-bold font-raleway text-[20px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, natus harum omnis consectetur et nesciunt provident
                    eligendi non cum necessitatibus cupiditate ratione
                    praesentium ipsum. Consequatur expedita quibusdam reiciendis
                    ipsam vero atque inventore ipsum accusamus laboriosam nulla.
                    Odit id consequuntur praesentium quia ea ratione?
                    Repellendus sequi quis, voluptas doloribus laudantium sit.
                  </h2>
                </div>
              </div>

              <div className="flex m-[25px] justify-center items-center mt-[25px]">
                <div className="h-full w-full flex justify-center items-center w-1/4">
                  <label className="font-bold font-raleway text-[20px] ">
                    General Comments
                  </label>
                </div>
                <div className="overflow-y-scroll h-[250px] w-3/4">
                  <h2 className="font-bold font-raleway text-[20px] mt-[20px] ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate cumque doloribus deserunt unde error blanditiis,
                    aliquid aliquam incidunt ipsum! Accusamus exercitationem
                    veniam ratione deleniti quas dignissimos, repellendus
                    mollitia saepe expedita dolores ducimus quisquam! Earum
                    magnam, iste aut nobis corporis, cum enim cumque in
                    distinctio eaque dignissimos. Voluptates sed, nostrum
                    quibusdam laborum labore, vero laudantium obcaecati
                    provident unde alias esse voluptate! Totam veritatis sed ut
                    fugit fuga, maiores saepe amet quia molestiae eligendi
                    doloribus, beatae temporibus sit hic velit et debitis. Unde
                    fugit quisquam perspiciatis voluptatum deserunt officia.
                    Eligendi culpa alias impedit ipsam sequi quidem a sed dicta
                    beatae quo fuga, nihil libero ratione qui est accusantium
                    rem cum iusto odio maxime reiciendis numquam necessitatibus
                    dolore voluptatem! Ratione, ipsum possimus? Quaerat
                    consectetur nesciunt officia magni obcaecati, illum
                    laboriosam tempora, vel exercitationem optio repellat esse
                    rem, dolor voluptatibus eius provident excepturi. Minus
                    aperiam ipsa non nisi molestias delectus voluptate
                    cupiditate facilis incidunt?
                  </h2>
                </div>
              </div>

              <h1 className="text-[50px] font-raleway font-bold text-[#432C81]">
                Prescription
              </h1>

              <div className="flex m-[15px] justify-center items-center">
                <div className="h-full w-full flex justify-center items-center w-1/4">
                  <label className="font-bold font-raleway text-[25px]">
                    Start Date
                  </label>
                </div>
                <div className="border-solid rounded-[15px] border-[#000000] border-[3px] ml-[20px] p-[10px] w-full">
                  <h2 className="font-bold font-raleway text-[20px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
              </div>

              <div className="flex m-[15px] justify-center items-center">
                <div className="h-full w-full flex justify-center items-center w-1/4">
                  <label className="font-bold font-raleway text-[25px]">
                    End Date
                  </label>
                </div>
                <div className="border-solid rounded-[15px] border-[#000000] border-[3px] ml-[20px] p-[10px] w-full">
                  <h2 className="font-bold font-raleway text-[20px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
              </div>

              <div className="flex m-[15px] justify-center items-center">
                <div className="h-full w-full flex justify-center items-center w-1/4">
                  <label className="font-bold font-raleway text-[25px]">
                    Name
                  </label>
                </div>
                <div className="border-solid rounded-[15px] border-[#000000] border-[3px] ml-[20px] p-[10px] w-full">
                  <h2 className="font-bold font-raleway text-[20px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
              </div>

              <div className="flex m-[15px] justify-center items-center">
                <div className="h-full w-full flex justify-center items-center w-1/4">
                  <label className="font-bold font-raleway text-[25px]">
                    Reason
                  </label>
                </div>
                <div className="border-solid rounded-[15px] border-[#000000] border-[3px] ml-[20px] p-[10px] w-full">
                  <h2 className="font-bold font-raleway text-[20px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
              </div>
            </div>
            <h1 className="fon"></h1>
          </div>
        </div>
      </div>
    );
  }
}
