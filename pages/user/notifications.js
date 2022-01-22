
import Link from "next/link";
import Image from "next/image";
import notifications from "../../public/notifications.png";
import NotificationCard from "../../components/NotificationCard";
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
        <div className="h-1/6">
          <div className="m-[60px]">
            <h1 className="font-raleway text-[60px] font-bold text-[#432C81]">
              Notifications
            </h1>
          </div>
        </div>
        <div className="flex h-5/6">
          <div className="h-5/6 flex flex-col items-center overflow-y-scroll scrollbar-hide w-5/6">
            <NotificationCard
              notifType="labReport"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
            <NotificationCard
              notifType="prescription"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
            <NotificationCard
              notifType="doctorReport"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
            <NotificationCard
              notifType="doctorReport"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />

            <NotificationCard
              notifType="labReport"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
            <NotificationCard
              notifType="prescription"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
            <NotificationCard
              notifType="doctorReport"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
            <NotificationCard
              notifType="doctorReport"
              notifTitle="Notification Title"
              notifDescription="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor"
            />
          </div>
          <div className="w-1/6 mr-[40px]">
            <Image src={notifications} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
