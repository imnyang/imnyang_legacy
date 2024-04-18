import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col w-[100vw] h-[100vh] item-center justify-center`}
    >
      <p className="font-extrabold text-5xl text-center">imnyang</p>
      <br/>
      <p className="text-center">Made with 💕 / Comming Soon</p>
    </main>
  );
}
