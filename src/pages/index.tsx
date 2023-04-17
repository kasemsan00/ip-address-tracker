import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [searchIP, setSearchIP] = useState("");

  return (
    <main className="flex min-h-screen items-center flex-col p-10 gap-7">
      <div className="fixed top-0 left-0 right-0 z-[-1] w-full h-[200px]">
        <Image
          width={undefined}
          height={undefined}
          priority={true}
          className="w-full h-full"
          src={require("../assets/images/pattern-bg-desktop.png")}
          alt={"background"}
        />
      </div>
      <span className="text-white text-2xl">IP Address Tracker</span>
      <div>
        <input
          className="px-4 py-3 h-[50px] rounded-l-2xl outline-none bg-white"
          type="text"
          placeholder="Search for any IP address or domain"
          value={searchIP}
          onChange={(e) => setSearchIP(e.target.value)}
        />
        <button className="px-4 py-3 h-[50px] rounded-r-2xl bg-black hover:bg-VeryDarkGray text-white">
          <Image
            src={require("../assets/images/icon-arrow.svg")}
            width={undefined}
            height={undefined}
            priority={true}
            alt={"search"}
          />
        </button>
      </div>
      <div className="bg-white w-full drop-shadow-sm rounded-md">
        Hello
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
