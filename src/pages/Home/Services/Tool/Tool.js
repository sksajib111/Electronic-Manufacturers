import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../Firebase.init";
// import { useNavigate } from "react-router-dom";

const Tool = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [tool, setTool] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  // const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://evening-ridge-50687.herokuapp.com/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
      });
  }, [id]);

  // console.log(tool);
  // const navigate = useNavigate();

  const { name, img, price, minOrderQuantity, inStock, desc } = tool;

  const quantityRef = useRef("");
  const [quantity, setQuantity] = useState(minOrderQuantity);
  const [btnDisable, setBtnDisable] = useState(false);

  // quantity handle
  const handleQuantity = (e) => {
    // e.preventDefault();
    setQuantity(e.target.value);
  };


  // form submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuantity = parseInt(quantityRef.current.value || minOrderQuantity);
  
    if (newQuantity > parseInt(inStock)) {
      setBtnDisable(true);
      toast.error(`Maximum Order Quantity ${inStock} pcs.`);
      return;
    }
    if (newQuantity < minOrderQuantity) {
      setBtnDisable(true);
      toast.error(`Minimum Order Quantity ${minOrderQuantity} pcs.`);
      return;
    }
    console.log(newQuantity)
    console.log(minOrderQuantity)
    const orderForm = {
      name: e.target.name.value,
      email: e.target.email.value,
      order: e.target.order.value,
      price: e.target.price.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      quantity: newQuantity,
    };

    // fetch to post
    fetch("https://evening-ridge-50687.herokuapp.com/order", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(orderForm),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Order Added Successfully");
        // e.target.reset()
      });

 };

  useEffect(() => {
    if (quantity >= minOrderQuantity) {
      setBtnDisable(false);
    }

  }, [quantity, minOrderQuantity]);

  return (
    <div className="px-20">
      <h2 className="text-3xl text-center text-warning"> Place To Orders </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 gap-0 min-h-md bg-base-200 mx-auto  shadow-2xl rounded-xl">
        <div className="card max-w-sm max-h-md mx-auto my-6">
          <figure>
            <img className="rounded-full w-56 h-56" src={img} alt="images" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-orange-400 font-bold">
              Minimum Order Quantity : {minOrderQuantity}
            </p>
            <p className="text-orange-400 font-bold">
              Available Quantity : {inStock}
            </p>
            <p className="text-orange-700 font-bold">
              Price Per Unit: ${price}
            </p>
            <p className="max-w-md">
              {desc} <span>....</span>
            </p>
          </div>
        </div>

        {/* input form star here */}
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <h2 className="text-center">
              Order For :
              <span className="text-info font-bold text-2xl"> {name}</span>
            </h2>
            <div className="form-control">
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="order"
                value={name}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                value={price}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder={minOrderQuantity}
                ref={quantityRef}
                className="input input-bordered"
                required
                onChange={handleQuantity}
              />
              <div className="flex justify-between font-semibold  items-center sm : max-w-sm">
                <p className="text-xs flex justify-center items-center mr-2">
                  Minimum Order : 4
                </p>
                <p className="text-xs  flex justify-center items-center">
                  Maximum Order :{inStock}
                </p>
                <p className="text-center text-xs">
                  Total Price :$ <span>{price * quantity}</span>
                </p>
              </div>
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
                type="text"
                name="address"
                placeholder="Enter Your Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button disabled={btnDisable} className="btn btn-primary">
                Confirm Orders
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tool;
