import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#111111] flex items-center justify-start px-10 py-4">
      <h5 className="text-white">
        Copyright © 2023 Research League |
        <Link href={"/condition"} className="pl-2 text-[#E34530]">
          Our Terms & Conditions
        </Link>
      </h5>
    </div>
  );
};

export default Footer;
