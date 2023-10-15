import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://evening-ridge-50687.herokuapp.com/orders", {
        headers: {
          authorization: `Bear ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setOrders(res.data));
  }, []);

  console.log(orders);


  //handle to delete orders 

  return (
    <div className="px-12 py-10">
      <h2 className="text-center text-4xl my-6">
        Manage All Orders:{orders.length}{" "}
      </h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>SL.No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {orders.map((order, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{order.order}</td>
                  <td>{order.price}</td>
                  <td>Pending</td>
                  <td>
                    <>
                      {order.delivered ? (
                        <button className="btn btn-xs ">Delete</button>
                      ) : (
                        <button className="btn btn-xs mr-4">Delivered</button>
                      )}

                      {order.delivered ? (
                        <button className="btn btn-xs">Delete</button>
                      ) : (
                        <button className="btn btn-xs">Delivered</button>
                      )}
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
