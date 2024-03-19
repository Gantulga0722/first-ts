import Image from "next/image";
import { Inter } from "next/font/google";
import { SideBar } from "@/components/SideBar";
import { PhoneCard } from "@/components/PhoneCard";
import { ComputerCard } from "@/components/ComputerCard";
import { TelevisionCard } from "@/components/TelevisionCard";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

let sideMenuData = [
  {
    title: "Phone",
    buttonText: "Phone",
    content: [
      {
        name: "Iphone",
        price: 1200,
        isVerifide: true,
      },
      {
        name: "Samsung",
        price: 1000,
        isVerifide: true,
      },
      {
        name: "Huwawey",
        price: 900,
        isVerifide: false,
      },
    ],
  },
  {
    title: "Computer",
    buttonText: "Computer",
    content: [
      {
        name: "Dell",
        price: 1000,
        isVerifide: true,
      },
      {
        name: "HP",
        price: 1500,
        isVerifide: false,
      },
      {
        name: "Mac",
        price: 1700,
        isVerifide: true,
      },
    ],
  },
  {
    title: "Television",
    buttonText: "Television",
    content: [
      {
        name: "Samsung",
        price: 1800,
        isVerifide: true,
      },
      {
        name: "Mi",
        price: 1200,
        isVerifide: false,
      },
      {
        name: "LG",
        price: 800,
        isVerifide: true,
      },
    ],
  },
];

export default function Home() {
  const [state, setState] = useState<string>("phone");
  return (
    <div className="flex w-[100%] ">
      <div className="flex w-[15%] justify-center h-screen bg-green-300">
        <SideBar setState={setState} />
      </div>
      <div className="flex w-[85%] h-screen bg-blue-300">
        {() => {
          switch (state) {
            case "phone":
              return (
                <div
                  className={`${state == "phone" ? "pt-10 block" : "hidden"}`}
                >
                  <PhoneCard sideMenuData={sideMenuData} />
                </div>
              );
            case "computer":
              return (
                <div
                  className={`${
                    state == "computer" ? "pt-10 block" : "hidden"
                  }`}
                >
                  <ComputerCard sideMenuData={sideMenuData} />
                </div>
              );
            case "television":
              return (
                <div
                  className={`${
                    state == "television" ? "pt-10 block" : "hidden"
                  }`}
                >
                  <TelevisionCard sideMenuData={sideMenuData} />
                </div>
              );
          }
        }}
      </div>
    </div>
  );
}
