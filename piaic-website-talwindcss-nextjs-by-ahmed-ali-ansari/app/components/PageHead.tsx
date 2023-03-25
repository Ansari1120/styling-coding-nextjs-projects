import React from "react";
// import Button from "./Button";
import Wrapper from "./Wrapper";

export default function PageHead({
  Heading,
  Para,
  tracks,
}: {
  Heading: String;
  Para: String;
  tracks: String;
}) {
  let main = `${Heading} \n ${tracks}`;
  return (
    <section className=" rounded-tl-2xl rounded-bl-2xl p-6 ml-3 mt-10 lg:mt-20 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-300 to-blue-500 ">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className="text-blue-600 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="font-bold text-4xl whitespace-pre-line">{main}</h2>
          <p className="mt-6 text-xl ">{Para}</p>
        </div>
      </Wrapper>
    </section>
  );
}
