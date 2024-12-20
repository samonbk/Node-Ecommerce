import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import UserSignUp from "./Components/Guest/UserSignUp";
import UserLogIn from "./Components/guest/UserLogIn";
import Account from "./Components/Pages/Account/Account";
import AdminLayout from "./Components/Admin/AdminLayout";
import AddProduct from "./Components/Admin/AddProduct";
import Dashboard from "./Components/Admin/Dashboard";
import AdminSignIn from "./Components/Admin/AdminSignIn";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import CreateUser from "./Components/Admin/CreateUser";
import UserDashboard from "./Components/User/UserDashboard";
import Users from "./Components/Admin/Users";
import Products from "./Components/Admin/Products";
import CreateGuest from "./Components/Admin/CreateGuest";
import GuestLayout from "./Components/Guest/UserLayout";
import UserLayout from "./Components/User/UserLayout";
import UserSignIn from "./Components/User/UserSignIn";
import Product from "./Components/Product/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="/shop" element={<h1>shop</h1>} />
          <Route path="/search" element={<h1>search</h1>} />
          <Route path="/cart" element={<h1>cart</h1>} />
        </Route>
        <Route path="/guest" element={<GuestLayout />}>
          <Route path="signup" element={<UserSignUp />} />
          <Route path="signin" element={<UserLogIn />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user_table" element={<Users />} />
          <Route path="product_table" element={<Products />} />
          <Route path="add_product" element={<AddProduct />} />
          <Route path="create_user" element={<CreateUser />} />
          <Route path="create_guest" element={<CreateGuest />} />
          <Route path="update_product/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="user_table" element={<Users />} />
          <Route path="product_table" element={<Products />} />
          <Route path="add_product" element={<AddProduct />} />
          <Route path="create_guest" element={<CreateGuest />} />
          <Route path="update_product/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="/user/signin" element={<UserSignIn />} />
        <Route path="/admin/signin" element={<AdminSignIn />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
