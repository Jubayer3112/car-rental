/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex h-[70vh] justify-center items-center">
        <img
          src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
          alt=""
        />
        D
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
