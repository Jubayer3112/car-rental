import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import BrandProduct from "../Pages/Brand/BrandProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
        path: "/shoppingcart",
        element: (
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://car-rent-server-p9l7xvtsh-jubayer3112.vercel.app/cart"
          ),
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
          fetch(
            `https://car-rent-server-p9l7xvtsh-jubayer3112.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-rent-server-p9l7xvtsh-jubayer3112.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
