import Image from "next/image";
import { Inter } from "next/font/google";

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
  return <main className="flex justiry-center items-center"></main>;
}
