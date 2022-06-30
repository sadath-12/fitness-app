import React from "react";
import Image from "next/image";
import img from "../public/assets/images/image3.jpg";

const BookConsultation = () => {
  return (
    <div className="px-5 py-3 flex flex-col space-y-4 w-full">
      <div>
        <h1 className="font-bold text-xl md:text-3xl text-center p-3 border-b-2 tracking-wider border-black">
          So What are you waiting for ?
        </h1>
      </div>

      <div className="flex flex-col md:flex-row pt-10 items-center justify-center  md:mx-auto   space-x-20">
        <div className="flex-1 md:flex-2">
          <Image
            src={img}
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="flex  flex-col space-y-7 flex-1">
          <p className="font-semibold text-gray-600  text-left w-[400px]">
            When you re trying to make a change, having the right people in your
            corner can make all the difference. I get out of bed every day to
            help people become healthier versions of themselves. I decided to
            become a personal trainer because I used to walk into the gym and
            not know what I was doing. I'd wander round from machine to machine
            following instructions, with no clear direction or knowledge.. I
            want to help other women learn how to use free weights and empower
            them with the strength and confidence to achieve the results they
            want, it s a passion truly close to my heart.
          </p>
          <button className="font-bold text-white bg-orange-500 text-xl hover:bg-orange-300 px-8 py-3 rounded-md">Book Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
