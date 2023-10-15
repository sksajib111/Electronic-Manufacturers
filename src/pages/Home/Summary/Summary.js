import React from "react";
import { ImUserCheck } from "react-icons/im";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";

const Summary = () => {
  return (
    <div className="my-32 px-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center">
            <ImUserCheck className="text-3xl text-error w-12 h-12 bg-lime-300 rounded-full" />
            <h2 className="px-4">Users In our Community</h2>
            <p className="px-5 text-xl font-bold">2352K</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-orange-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center">
            <MdOutlineShoppingCart className="text-3xl text-error w-12 h-12 bg-gray-400 rounded-full" />
            <h2 className="px-4">Monthly users orders Around </h2>
            <p className="px-5 text-xl font-bold">23K</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-green-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center">
            <GrLineChart className="text-3xl w-12 h-12 text-error bg-lime-300 rounded-full" />
            <h2 className="px-4">Monthly Rivenue</h2>
            <p className="px-5 text-xl font-bold">2352K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
