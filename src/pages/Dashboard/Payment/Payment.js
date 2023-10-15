import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

// stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51L1YKcCSwG8CgGDROMBz3kz6xC2QCemcho77guUezPDTNqlO8hsjNKlkoyAGBBuDfA2IONO3yDTvfLYYLzIBKau300ZZAJ4ySB"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://evening-ridge-50687.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="pr-20">
      <h2>Pay for {id}</h2>
      <div className="px-20">
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
          <div className="card-body">
            <p className="text-success font-bold">Hello, {order.name}</p>
            <h2 className="card-title">
              Please Pay for
              <span className="text-xl font-bold text-info">{order.order}</span>
            </h2>
            <p>
              Please pay: <span className="text-info">${order.price}</span>
            </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
