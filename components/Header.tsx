"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    //Handle Logout in da future
  };
  return (
    <div
      className={twMerge(
        `
  h-fit
  bg-gradient-to-b
  from-emerald-800
  p-6
  
  `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between ">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
            onClick={() => router.back}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
            onClick={() => router.forward}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>

        {/* mobile view */}
        <div className="flex md:hidden gap-x-2 items-center"></div>
      </div>
    </div>
  );
};

export default Header;
