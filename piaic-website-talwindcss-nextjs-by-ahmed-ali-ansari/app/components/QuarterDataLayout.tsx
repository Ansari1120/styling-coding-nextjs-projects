import React from "react";

const QuarterDataLayout = ({
  centerHeading,
  courseTitle,
  Duration,
  descriptionlabel,
  quarterDescription,
  quarterContents,
  quarterContentText,
  outline,
  links,
}: any) => {
  return (
    <>
      <div className="container pt-[130px] w-auto">
        <div>
          <h1 className=" text-center text-lg pb-[20px]">{centerHeading}</h1>
        </div>
        <div className="flex md:flex-row md:gap-[365px] gap-[50px] flex-col">
          <div>
            <h2 className="text-lg">{courseTitle}</h2>
          </div>
          <div>
            <label className=" text-teal-500 font-semibold pt-[10px]">
              {Duration}
            </label>
          </div>
        </div>
        <div>
          <h2 className="pt-[30px] pb-[14px] underline text-lg">
            {descriptionlabel}
          </h2>
        </div>
        <div>
          <h2 className=" font-semibold">{quarterDescription}</h2>
        </div>
        <div>
          <h2 className="pt-[30px] pb-[14px] underline text-lg">{outline}</h2>
        </div>
        {/* {main div of content data} */}
        <div className=" pl-[50px]">
          <div>
            <h1 className="text-lg pb-[17px]">{quarterContents}</h1>
          </div>
          <div className="flex flex-row bg-gradient-to-tr from-teal-500 to-green-500 border-r-[16px] pl-[14px] pr-[10px] md:pb-0 pb-[10px] md:pt-0 pt-[10px] mb-[10px]">
            <div>
              <p className="font-semibold">{quarterContentText}</p>
            </div>
            <div className="ml-[20px]">
              <p className=" font-semibold text-blue-700 underline">{links}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuarterDataLayout;
