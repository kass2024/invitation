import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex flex-col md:flex-row items-center justify-between pt-5 md:pt-3 gap-8 md:gap-0 md:px-8">
      <Image src={logo} alt="Logo" className="" />
      <div className="">
        <Link
          target="_blank"
          href={"https://research-leagues.com"}
          className="flex items-center gap-3 hover:text-[#d85b5b] font-bold mr-20"
        >
          <IoHomeSharp />
          Website
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
