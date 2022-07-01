import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="w-full">
      <div
        style={{ backgroundImage: `url(/assets/images/image2.png)` }}
        className="!bg-no-repeat md:!bg-cover    min-w-full hidden md:flex  text-center items-center justify-center h-[400px]"
      >
        <div className="space-y-8 items-center flex flex-col w-[800px]">

        <h1 className="font-bold text-center text-white text-4xl">lives transformed everyday - are you next?</h1>
        <p className="font-medium text-white p-3 w-[700px]">
          I help women build strength with my proven programme that gives you
          the knowledge, strategies and accountability to unlock your full
          potential.{" "}
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
