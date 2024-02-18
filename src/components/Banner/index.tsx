import { MdEmail, MdPhone } from "react-icons/md";

const Banner = () => {
  return (
    <div className="w-full bg-[#692014] py-4 md:py-2 flex flex-col md:flex-row gap-8 md:gap-5 justify-start items-center text-white">
      <h5 className="flex items-center gap-3 ml-5 md:ml-20 hover:text-black">
        <span>
          <MdEmail color="red" size={17} />
        </span>
        team@research-leagues.com
      </h5>
      <h5 className="flex items-center gap-3 hover:text-black">
        <span>
          <MdPhone color="red" size={17} />
        </span>
        +1 (438) 5190266
      </h5>
    </div>
  );
};
export default Banner;
