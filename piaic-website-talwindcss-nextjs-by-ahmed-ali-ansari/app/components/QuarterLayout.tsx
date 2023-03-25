import Link from "next/link";
import React from "react";
import Button from "./Button";
import Wrapper from "./Wrapper";

export default function QuarterLayout(props: any) {
  const { data } = props;

  return (
    <>
      <section>
        <Wrapper>
          <div className="pt-20  my-10  flex flex-col md:flex-row gap-x-8 gap-y-5 mx-3">
            {data.map((x: any, i: any) => {
              return (
                <div
                  key={i}
                  className="border rounded-md  relative p-8 mb-2 md:w-[600px] w-[300px] justify-center  items-center align-middle"
                >
                  <h1 className="font-bold text-lg">{x.id}</h1>
                  <p className="mt-2 text-blue-300  font-semibold z-0">
                    {x.description}
                  </p>
                  <Link href={`${x.link}`}>
                    <Button text="Learn More" />
                  </Link>
                  <div className="absolute text-gray-200 top-0 right-14 text-9xl font-bold -z-10">
                    {x.id === "Quarter I" ||
                    x.id === "Quarter II" ||
                    x.id === "Quarter III"
                      ? i + 1
                      : i + 4}
                  </div>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </section>
    </>
  );
}

//continue
