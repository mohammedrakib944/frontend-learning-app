import React from "react";
import Rakib from "../../public/images/rakib.jpg";
import { AiOutlineStar, AiOutlineSend } from "react-icons/ai";
import Image from "next/image";
import Rating from "../common/Rating";

const Card = () => {
  const Topics = ["Programming", "Javascript", "Website"];
  return (
    <div className="bg-white border-b py-6 px-5 rounded-lg ">
      {/* Header */}
      <div className="flex flex-wrap gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={Rakib}
            className="w-10 h-10 rounded-full border"
            alt="Rakib"
          />
          <div>
            <div className="flex items-center gap-3">
              <p className="font-semibold">Md.Rakibuzzaman</p>
              <Rating />
              (4.4)
            </div>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div>
          <p className=" text-gray-800 font-semibold">৳ 100-160 tk</p>
        </div>
      </div>
      {/* Problem */}
      <h3 className="text-sm font-semibold pt-4 text-gray-400">Problem</h3>
      <h2 className="text-2xl font-semibold text-info">
        Can anyone teach me hoasting topic in Javascript.
      </h2>
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <button className="btn btn-xs gap-2 btn-secondary hover:bg-green-500 text-white rounded-full">
            Send Offer <AiOutlineSend />
          </button>
          <p className="flex gap-2 text-primary items-center">
            <AiOutlineStar /> Interested
            <span className="font-semibold">9</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap text-sm gap-3 mt-3 text-gray-400">
        {Topics.map((data, index) => (
          <p key={index}>#{data}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;