import React from "react";
import Image from "next/image";
import spinner from "../../public/mainSpinner.gif";
const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={spinner} width={350} height={350} alt="loader" />
    </div>
  );
};

export default Loader;
