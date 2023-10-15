import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import auth from "../../../Firebase.init";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { SiAmazonpay } from "react-icons/si";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      fetch(
        `https://evening-ridge-50687.herokuapp.com/order?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if(res.status===401 || res.status===403){
            signOut(auth)
            localStorage.removeItem("accessToken")
            navigate("/")
          }
          return res.json()
        })
        .then((data) => {
          setOrders(data);
          console.log(data)
        }) 
        .catch((error)=>{
          console.log(error)
        })
    }
  }, [user,navigate]);

  // delete my orders

  const handleOrderDelete = (id) => {
    console.log("Deleting", id);
    const proceed = window.confirm("are you sure wants to delete");
    if (proceed) {
      const url = `https://evening-ridge-50687.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/jon",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const orderRemaining = orders.filter(user=>user._id !==id) 
            setOrders(orderRemaining);
            toast.success(" Order Deleted Successfully")
          }
        });
    }
  };

  return (
    <div className="w-4/5 mx-auto sm:min-w-screen">
      <h2 className="text-4xl font-bold py-4 text-center">
        My Orders {orders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Orders Name</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Action</th>
            </tr>
          </thead>
          <tbody className="shadow-4xl bg-amber-100">
            {/* <!-- row 1 --> */}
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.order}</td>
                <td>{order.price}</td>
                <td className="mr-2">
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success mr-2">
                        <SiAmazonpay className="text-2xl" />
                      </button>
                    </Link>
                  )}
                  {order.price && !order.paid && (
                    <button
                      onClick={() => handleOrderDelete(order._id)}
                      className=" btn-xs pr-4 btn-outline-0"
                    >
                      <RiDeleteBin6Fill className="text-2xl text-warning" />
                    </button>
                  )}

                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p className="text-xs text-orange-600">
                        <cite>Transaction Id:</cite>
                        <span className="text-success px-2 text-xl">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
