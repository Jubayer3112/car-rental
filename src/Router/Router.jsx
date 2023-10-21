import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/Mycart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import BrandProduct from "../Pages/Brand/BrandProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/productDetails",
        element: <Register />,
      },
      {
        path: "/brandProduct/:brand",
        loader: () => fetch("/brand.json"),
        element: (
          <PrivateRoute>
            <BrandProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default Router;
