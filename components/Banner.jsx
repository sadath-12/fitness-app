import React from "react";

const Banner = () => {
  return (
    <div className="min-w-full w-[100%] h-[600px] flex items-center justify-center  ">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundPosition: "center",
        }}
        className="min-w-full flex items-center justify-center  w-full h-[600px] !bg-no-repeat !bg-contain md:!bg-cover !object-cover"
      >
        <div className=" text-white space-y-4 mb-5 flex flex-col items-center px-10 " >
          <h1 className="font-bold text-xl md:text-5xl">BUILD CONFIDENCE!</h1>
          <p className="font-semibold text-md">
            Helping you to feel more confident both inside and outside of the
            gym!
          </p>
          <button className="px-5 py-2 font-semibold rounded-md bg-orange-500 hover:bg-orange-300 "> Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
