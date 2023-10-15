import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  // const [tool, setTool] = useState({});

  // form submit

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateForm = {
      name: e.target.value.user.name,
      phone: e.target.value.user.phone,
      about: e.target.value.user.about,
      education: e.target.value.user.education,
      profession: e.target.value.user.profession,
      address: e.target.value.user.address,
      linkedin: e.target.value.user.linkedin,
      img:user?.PhotoURL,
    };

    // fetch to post
    fetch(`https://evening-ridge-50687.herokuapp.com/user/${user.email}`, {
      method: "POST",
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(updateForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("update Successfully");
        e.target.reset()
      });
  };

  return (
    <div className="px-20">
      <h2 className="text-3xl text-center text-warning"> Update Your Profile </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 gap-0 min-h-md bg-base-200 mx-auto  shadow-2xl rounded-xl">
        <div className="card max-w-sm max-h-md mx-auto my-6">
          <figure>
            <img className="rounded-full w-24 h-24" src={user?.img?.PhotoURL} alt="images" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {user?.displayName?.user?.name}
            </h2>
          </div>
        </div>

        {/* input form star here */}
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="about"
                placeholder="About"
                defaultValue={user?.about}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="education"
                placeholder="Education"
                defaultValue={user?.education}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                defaultValue={user?.profession}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="address"
                placeholder="Enter your Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="phone"
                placeholder="Enter Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                name="linkedin"
                placeholder="Enter Your linkedin profile"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button  className="btn btn-primary">
               Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
