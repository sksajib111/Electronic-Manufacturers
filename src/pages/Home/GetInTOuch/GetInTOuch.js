import React from "react";

const GetInTOuch = () => {
  return (
    <div className="my-20">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/brmscnN/back.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex">
          <div className="max-w-lg">
            <div className="flex flex-col item-center justify-between">
              <div className="text-white text-2xl">
                <h2 className="tex-5xl ">
                  Don't Miss Any Update.you can explore with us easily{" "}
                </h2>
                <div className="form-control flex flex-row items-center justify-between ">
                  <span className="label-text text-2xl text-white">
                    Enter your email address
                  </span>
                  <div className="relative my-10">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered w-full pr-16"
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTOuch;
