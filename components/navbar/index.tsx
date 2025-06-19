import { LayoutDashboard, MenuSquare, Search } from "lucide-react";
import Image from "next/image";
import MetroLink from "./metro-link";

export default function Navbar() {
  return (
    <div className="bg-[#1a2238] px-4">
      <div className="max-w-7xl mx-auto gap-6 h-[5rem] flex items-center ">
        <button className="hover:bg-[#f6c700] h-full aspect-square flex cursor-pointer transition-all duration-300 hover:scale-90 items-center bg-gray-700 justify-center">
          <LayoutDashboard />
        </button>
        <div className="flex flex-grow relative gap-4">
          {/* <div>
            <Search className="absolute top-0 left-0" />
            <input className="bg-white h-[3rem]" type="text"></input>
          </div> */}
          <MetroLink href="/">Home</MetroLink>
          <MetroLink href="/about">About Us</MetroLink>
          <MetroLink href="/operational">Operational</MetroLink>
          <MetroLink href="/career">Career</MetroLink>
          <MetroLink href="/news">News</MetroLink>
        </div>
        
        <div>
          <Image
            src="/skk-migas-logo.png"
            height={24}
            width={60}
            alt="HCML Logo"
          />
        </div>
        <div>
          <Image src="/hcml-logo.png" height={24} width={72} alt="HCML Logo" />
        </div>
      </div>
    </div>
  );
}
