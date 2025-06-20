"use client";

import { LayoutDashboard, Menu, X, Home, Users, Settings, Briefcase, Newspaper } from "lucide-react";
import Image from "next/image";
import MetroLink from "./metro-link";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/operational", label: "Operational", icon: Settings },
    { href: "/career", label: "Career", icon: Briefcase },
    { href: "/news", label: "News", icon: Newspaper },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-[#1a2238] px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto gap-6 h-[5rem] flex items-center">
          <button className="hover:bg-[#f6c700] h-full aspect-square flex cursor-pointer transition-all duration-300 hover:scale-90 items-center bg-gray-700 justify-center">
            <LayoutDashboard />
          </button>
          <div className="flex flex-grow relative gap-4">
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
              alt="SKK Migas Logo"
            />
          </div>
          <div>
            <Image src="/hcml-logo.png" height={24} width={72} alt="HCML Logo" />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="bg-[#1a2238] px-4 lg:hidden">
        <div className="h-[5rem] flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-[#f6c700] hover:text-[#1a2238] transition-all duration-300"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-3">
            <Image
              src="/skk-migas-logo.png"
              height={20}
              width={50}
              alt="SKK Migas Logo"
            />
            <Image src="/hcml-logo.png" height={20} width={60} alt="HCML Logo" />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Metro Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 bg-[#1a2238] z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center gap-3">
            <Image src="/hcml-logo.png" height={24} width={72} alt="HCML Logo" />
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-[#f6c700] hover:text-[#1a2238] transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Metro Navigation Grid */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.href}
                  className={`
                    group relative overflow-hidden 
                    ${index === 0 ? 'col-span-2 h-24' : 'h-20'}
                    ${index % 3 === 0 ? 'bg-[#f6c700]' : index % 3 === 1 ? 'bg-blue-600' : 'bg-green-600'}
                    hover:scale-95 transition-all duration-300 cursor-pointer
                  `}
                  onClick={() => {
                    window.location.href = item.href;
                    setIsSidebarOpen(false);
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-3">
                    <IconComponent 
                      size={index === 0 ? 28 : 24} 
                      className="mb-1 group-hover:scale-110 transition-transform duration-300" 
                    />
                    <span className={`font-medium text-center leading-tight ${index === 0 ? 'text-sm' : 'text-xs'}`}>
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Metro tile animation effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

         
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-600">
          <div className="flex items-center justify-center">
            <Image
              src="/skk-migas-logo.png"
              height={20}
              width={50}
              alt="SKK Migas Logo"
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    </>
  );
}
