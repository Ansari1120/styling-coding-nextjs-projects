"use client";
import React from "react";

interface propTypes {
  posts: any;
}
const PaginationBar: React.FC<propTypes> = ({ posts }) => {

  const numbersArray = Array.from(
    { length: posts.totalPages },
    (_, index) => index + 1
  );
  //   const [page, setActivePage] = useState(1);
  const highlight = (number: number) => {
    console.log(number);
  };

  return (
    <li className="mt-8 flex py-19 gap-5 justify-center items-center text-lg font-semibold text-black dark:text-white">
      {numbersArray.map((number) => {
        return (
          <div
            onClick={() => highlight(number)}
            className={`${
              posts.page === number ? "bg-gray-400 rounded-md" : ""
            } py-2 px-4 cursor-pointer transition-all`}
          >
            {number}
          </div>
        );
      })}
    </li>
  );
};

export default PaginationBar;
