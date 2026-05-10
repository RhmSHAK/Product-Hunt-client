import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Proviter/AuthProviders";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { sendEmailVerification } from "firebase/auth";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SingUp = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const { createUser, LogOut, updateUserProfile } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const from = event.target;

    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const image = from.image.value;

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, image).then(() => {
          const userInfo = { name, email, image };

          axiosPublic.post("/user", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire("Success", "Account Created", "success");
              LogOut();
              navigate("/login");
            }
          });
        });

        sendEmailVerification(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* ---------------- LEFT IMAGE ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-10"
        >
          <img
            src="/Register.jpg"
            alt="signup"
            className="w-full  object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* ---------------- RIGHT FORM ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center p-8 lg:p-12"
        >
          <div className="w-full max-w-md">

            <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Create account
            </h1>

            <p className="text-center text-gray-500 mb-6 text-sm">
              Join and explore amazing products
            </p>

            <form onSubmit={handleSignUp} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="text"
                name="image"
                placeholder="Profile Image URL"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
                  required
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition">
                Sign Up
              </button>
            </form>

            <p className="text-center mt-5 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 font-semibold">
                Login
              </Link>
            </p>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingUp;