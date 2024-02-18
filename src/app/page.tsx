import Form from "@/components/Form";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-start mb-2">
      <h4
        className="text-[2.2rem] mt-20 md:mt-5 mb-4"
        style={{ fontFamily: "Dancing script" }}
      >
        Invitation Generator
      </h4>
      <div className="w-full flex md:flex-row flex-col gap-3 md:h-[125.5vh] mb-9 items-center justify-between md:px-10 px-2">
        <div className="w-full md:w-[48%] rounded-lg bg-[#692014] md:h-[100%] flex gap-20 flex-col items-center">
          <h4
            className="text-white text-[2.5rem] leading-0 mt-[10%] md:mt-[30%] w-full text-center"
            style={{ fontFamily: "Dancing script" }}
          >
            Generate your invitation effortlessly with one click.
          </h4>
          <div className="mb-[20%] md:mb-auto">
            {/* <button>
            </button> */}
            <span className="relative flex h-[4rem] w-[4rem] flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative flex items-center justify-center rounded-full h-[80%] w-[80%] bg-sky-500 cursor-pointer">
                <FaPlay color="white" />
              </span>
            </span>
          </div>
        </div>
        <Form />
      </div>
    </main>
  );
};

export default Home;
