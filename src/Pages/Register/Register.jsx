import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.userphoto.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+)/;
    if (!passwordRegex.test(password)) {
      // Password doesn't meet the requirements
      Swal.fire({
        position: "top",
        icon: "error",
        title:
          "Password must contain at least one capital letter and one special character",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        userProfile(name, photo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));

        if (result.user.email) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Account Created Succesully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          position: "top",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <form
        onSubmit={handleRegister}
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <img
              className="mx-auto"
              src="https://www.freeiconspng.com/uploads/register-button-png-0.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="name" className="text-xs font-semibold px-1">
                    Name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="photo" className="text-xs font-semibold px-1">
                    User Photo (LInk)
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="url"
                      id="photo"
                      name="userphoto"
                      required
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500"
                      placeholder="Your Photo"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password" // Added name attribute
                      required // Added required attribute
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus-bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
              <hr className="my-6 border-gray-300 w-full" />
              <SocialLogin />
              <p className="mt-8">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
