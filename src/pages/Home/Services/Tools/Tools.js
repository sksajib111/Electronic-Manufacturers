import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tools = () => {
  const [tools, setTools] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/tool",{
        headers:{
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then((res) => setTools(res.data));
  }, []);

  const handlePurchase = (tool) => {
    const { _id } = tool;
    navigate(`/tool/${_id}`);
  };

  return (
    <div className="my-20 px-20">
      <h1 className="text-xl text-center">Our tools</h1>
      <h2 className="mb-10 text-4xl text-center text-red-500">
        Electrical Components Manufacturers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <div key={tool._id} tool={tool}>
            <div className="card sm:w-60 lg:w-96 max-h-md bg-base-100 shadow-xl  hover:opacity-50 transition duration-300 ease-in-out">
              <figure>
                <img src={tool.img} className="w-full" alt="images" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {tool.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>

                <p className="text-orange-400 font-bold">
            Minimum Order Quantity : {tool.minOrderQuantity}
          </p>
          <p className="text-orange-400 font-bold">
            Available Quantity : {tool.inStock}
          </p>
                <p className="max-w-md">
                  {tool.desc?.slice(0, 100)} <span>....</span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handlePurchase(tool)}
                    className="btn btn-xs"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
