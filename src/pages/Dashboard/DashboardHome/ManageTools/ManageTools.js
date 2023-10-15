import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get("/tool",{
        headers:{
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then((res) => setTools(res.data));
  }, []);

  // delete products 
  const handleOrderDelete = (id) => {
    console.log("Deleting", id);
    const proceed = window.confirm("are you sure wants to delete");
    if (proceed) {
      const url = `https://evening-ridge-50687.herokuapp.com/tool/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/jon",
          // authorization:`Bearer ${localStorage.getItem("accessToken")}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const orderRemaining = tools.filter(tool=>tool._id !==id) 
            setTools(orderRemaining);
            toast.success(" Order Deleted Successfully")
          }
        });
    }
  };

  return (
    <div className="px-12 py-4">
      <h2 className="text-center my-2 text-4xl">Manage All Products:{tools.length} </h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {tools.map((tool, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="rounded-full h-16 w-16"
                      src={tool.img}
                      alt="img"
                    />
                  </td>
                  <td>{tool.name}</td>
                  <td>{tool.price}</td>
                  <td>
                    <button onClick={()=>handleOrderDelete(tool._id)}   className="btn btn-xs mr-4">delete</button>
                    <button className="btn btn-xs">Add Quantity</button>
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

export default ManageTools;
