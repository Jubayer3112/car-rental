import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <img
                className="mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/4844/4844722.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                <p>Enter your information to login</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold px-1"
                    >
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
                      LOGIN
                    </button>
                  </div>
                </div>
                <hr className="my-6 border-gray-300 w-full" />
                <SocialLogin />
                <p className="mt-8">
                  Need an account?{" "}
                  <Link
                    to={"/register"}
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Register now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
