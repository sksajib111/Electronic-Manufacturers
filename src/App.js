import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/shared/Navbar/Navbar";
import About from "./pages/Home/About/About";
import NotFound from "./pages/shared/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Tools from "./pages/Home/Services/Tools/Tools";
import Summary from "./pages/Home/Summary/Summary";
import PrivateRoute from "./pages/Routes/PrivateRoute/PrivateRoute";
import Tool from "./pages/Home/Services/Tool/Tool";
import Dashboard from "./pages/Dashboard/DashboardHome/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Portfolio from "./pages/Home/Portfolio/Portfolio";
import Blog from "./pages/Home/Blog";
import AllUser from "./pages/Dashboard/AllUser/AllUser";
import Payment from "./pages/Dashboard/Payment/Payment";
import ManageOrder from "./pages/Dashboard/ManageOrder/ManageOrders";
import AddTool from "./pages/Dashboard/AddTools/AddTools";
import MyProfile from "./pages/Dashboard/UpdateUserProfile/updateProfile";
import RequireAdmin from "./pages/Routes/PrivateRoute/RequireAdmin";
import ManageOrders from "./pages/Dashboard/ManageOrder/ManageOrders";
import ManageTools from "./pages/Dashboard/DashboardHome/ManageTools/ManageTools";

// aso animation

// useEffect(() => {
//   <script>AOS.init();</script>;
// }, []);

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route
          path="/tool/:id"
          element={
            <PrivateRoute>
              <Tool />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="myOrder" element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="manageOrder/:id" element={<ManageOrder />}></Route>
          <Route path="updateProfile" element={<MyProfile />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addTool"
            element={
              <RequireAdmin>
                <AddTool />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders/>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageTools"
            element={
              <RequireAdmin>
                <ManageTools/>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
