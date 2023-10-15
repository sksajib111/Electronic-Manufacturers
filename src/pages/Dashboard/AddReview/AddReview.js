import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const dataForm = {
      user: data.user,
      ratings: data.ratings,
      comment: data.comment,
      profile: data.profile,
    };

    // const url =;
    fetch("https://evening-ridge-50687.herokuapp.com/review", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Review added successfully");
        reset();
      });
  };

  return (
    <div className="w-3/5 mx-auto">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body bg-accent">
          <h1 className="text-2xl text center">Add Reviews</h1>

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="User Name"
            type="text"
            {...register("user")}
          />
    
          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Ratings Not more then 5"
            type="number"
            {...register("ratings")}
          />

          <textarea
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="comments"
            type="text"
            {...register("comment")}
          />

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Photo URL"
            {...register("profile")}
          />

          <div className="card-actions justify-end">
            <input
              className="btn-primary input input-ghost w-full max-w-xs font-bold"
              type="submit"
              value="Add Review"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
  );
};

export default AddReview;
