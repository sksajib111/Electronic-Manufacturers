import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import Loading from "../../shared/Loading/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  // google sign in
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // sign in with email password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  let location = useLocation();

  // form set
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let from = location.state?.from?.pathname || "/";

  // use token hooks jwt for verify

  const [token] = useToken(user || gUser);

  let signInError;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  // if user
  if (error || gError) {
    signInError = (
      <p className="text-red-200"> {error?.message || gError?.message}</p>
    );
  }
  if (loading || gLoading) {
    return <Loading />;
  }

  // form submit

  // submit form

  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              {signInError}
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <div className="divider w-40 mx-auto">OR</div>
          <div className="flex flex-col my-2">
            <button
              onClick={() => signInWithGoogle()}
              className="btn bg-white text-black my-4 mx-auto px-6 flex flex-row font-bold hover:rounded-full hover:bg-orange-200"
            >
              <span>
                <FcGoogle className="w-6 h-6 font-bold" />
              </span>
              <span className="font-bold">continue with google</span>
            </button>
            <button className="btn text-black my-2 mx-auto gap-3 font-bold flex flex-row px-6 bg-sky-600 hover:bg-white  hover:rounded-full ">
              <FaFacebook className="w-6 h-6 font-white" />
              <span className="font-bold">continue with Facebook</span>
            </button>
          </div>
          <div>
            <h4 className="text-center font-bold">Don't have an account ?</h4>
            <button
              onClick={() => navigate("/register")}
              className="btn text-black my-3 mx-auto gap-3 font-bold flex flex-row px-6 bg-white hover:bg-amber-400 hover:rounded-full "
            >
              <BiLogInCircle className="w-6 h-6 font-white" />
              <span className="font-bold">Register Now </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
