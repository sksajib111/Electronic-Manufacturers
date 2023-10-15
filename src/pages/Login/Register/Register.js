import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase.init";
import Loading from "../../shared/Loading/Loading";
import useToken from "../../hooks/useToken";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // form set
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let SignUpError;

  // google sign in
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // create user with email password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // use token hooks

  const [token] = useToken(user || gUser);

  if (token) {
    navigate(from, { replace: true });
  }

  // update profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (error || gError || updateError) {
    SignUpError = (
      <p className="text-red-200">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }
  if (loading || gLoading || updating) {
    return <Loading />;
  }

  // submit form

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be 6 characters or longer",
                    },
                  })}
                />

                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {SignUpError}
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Register"
              />
            </form>
          </div>
          <div className="divider w-48 mx-auto">OR</div>
          <div className="flex flex-col gap-2 my-2">
            <button
              onClick={() => signInWithGoogle()}
              className="btn bg-white text-black my-2 mx-auto px-6 gap-3 flex flex-row font-bold hover:rounded-full hover:bg-orange-200"
            >
              <span>
                <FcGoogle className="w-6 h-6 font-bold" />
              </span>
              <span className="font-bold">continue with google</span>
            </button>
            <button className="btn hover:bg-accent my-2 mx-auto gap-2 font-bold flex flex-row px-6 bg-sky-600 text-white   hover:rounded-full ">
              <FaFacebook className="w-6 h-6 text-white" />
              <span className="font-bold">continue with Facebook</span>
            </button>
          </div>
          <div>
            <h4 className="text-center font-bold mb-2">
              Already have an account ?
            </h4>
            <button
              onClick={() => navigate("/login")}
              className="btn text-black mb-6 mx-auto gap-2 font-bold flex flex-row px-6 bg-white hover:bg-amber-400 hover:rounded-full "
            >
              <BiLogInCircle className="w-6 h-6 text-error" />
              <span className="font-bold">Login Now </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
