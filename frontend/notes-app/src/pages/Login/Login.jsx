import React, { useState } from "react"; // Import useState
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Passwordinput from "../../components/Input/Passwordinput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState(""); // Corrected from userState to useState
  const [password, setPassword] = useState(""); // Corrected from userState to useState
  const [error, setError] = useState(null); // Corrected from userState to useState

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add logic for login here

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter the password");
      return;
    }

    setError("");

    // Login API Call
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" // Explicitly passing placeholder
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signUp" className="font-medium text-primary underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
