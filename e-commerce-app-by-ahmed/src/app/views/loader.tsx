import Image from "next/image";
import { FC } from "react";
import Loader from "../../../public/spinner.gif";

const MyLoader: FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`${size}`}>
      <Image src={Loader} alt="Pre loader" />
    </div>
  );
};

export default MyLoader;
