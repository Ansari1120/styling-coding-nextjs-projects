import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <button className=" ease-in bg-blue-700   mt-3 hover:bg-blue-300 bg-[#0616C] text-white px-5  py-2 rounded-full hover:shadow-lg text-lg font-medium hover:scale-105  duration-300">
        {text}
      </button>
    </>
  );
};
export default Button;
