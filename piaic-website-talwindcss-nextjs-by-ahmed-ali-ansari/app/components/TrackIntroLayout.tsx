import React from "react";
import Wrapper from "./Wrapper";

export default function TrackIntroLayout(props: {
  TrackName: String;
  Description: String;
}) {
  const { TrackName, Description } = props;
  return (
    <section>
      <Wrapper>
        <div className="shadow-2xl rounded-xl border-slate-200 py-8 px-8 mx-4">
          <h4 className="text-blue-500 text-lg italic">Spacialized Program</h4>
          <h3 className="text-2xl font-bold">{TrackName}</h3>
          <p className="text-lg text-blue-300 mt-2 font-semibold">
            {Description}
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
