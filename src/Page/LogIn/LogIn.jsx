import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Proviter/AuthProviders";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = UseAxiosPublic();
    const emailRef = useRef(null);
    const auth = getAuth(app);

    const from = location.state?.from?.pathname || "/";

    const { logIn, googleLogIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                Swal.fire("Success", "Login Successful", "success");
                navigate(from, { replace: true });
            })
            .catch(() => {
                Swal.fire("Error", "Invalid email or password", "error");
            });
    };

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL
                };

                axiosPublic.post("/user", userInfo);

                Swal.fire("Success", "Google Login Successful", "success");
                navigate(from, { replace: true });
            })
            .catch(() => {
                Swal.fire("Error", "Google Login Failed", "error");
            });
    };

    const handleForget = () => {
        const email = emailRef.current.value;

        if (!email) return Swal.fire("Error", "Enter your email first", "error");

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire("Sent", "Check your email", "success");
            })
            .catch(() => {
                Swal.fire("Error", "Failed to send reset email", "error");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4">

            <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden">

                {/* LEFT IMAGE SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-500 p-10"
                >
                    <img
                        src="/Login-01.jpg"
                        alt="login"
                        className="w-full max-w-sm drop-shadow-2xl"
                    />
                </motion.div>

                {/* RIGHT FORM SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 md:p-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Welcome Back 👋
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Login to continue your journey
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">

                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Email"
                            className="w-full input input-bordered"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full input input-bordered"
                            required
                        />

                        <div className="flex justify-between text-sm">
                            <button
                                type="button"
                                onClick={handleForget}
                                className="text-blue-500 hover:underline"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Login
                        </button>
                    </form>

                    {/* divider */}
                    <div className="divider">OR</div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogle}
                        className="btn btn-outline w-full flex items-center gap-2"
                    >
                        <FaGoogle /> Continue with Google
                    </button>

                    <p className="text-center mt-6 text-sm">
                        New here?{" "}
                        <Link to="/singUp" className="text-blue-600 font-semibold">
                            Create account
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default LogIn;