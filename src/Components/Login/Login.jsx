import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate ko import karenge

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate(); // useNavigate hook ko initialize karenge

  const handleForm = async (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!email || !password) {
      setErr("All fields are required");
    } else {
      setErr(""); // Clear error message
      const loginData = {
        email,
        password
      };

      try {
        const response = await fetch('https://reactbackend-hv2w.onrender.com/login', {  // Specify the correct URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData)
        });

        const result = await response.json();

        if (response.ok) {
          setSuccess('Login successful');
          setEmail('');
          setPassword('');
          localStorage.setItem("isLoggedIn", "true"); // User ko logged-in status set karna
          
          // Redirect to the card component (or the desired route)
          navigate("/card"); // Yahan par aapko card component ke route par le jaya jayega
        } else {
          setErr(result.message || "Login failed");
        }
      } catch (error) {
        setErr('Error submitting the form. Please try again.');
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-1 py=6">
      <div className="bg-white dark:bg-gray-900 flex justify-center items-center ">
        <div className="hidden lg:block">
          <img
            src="https://i.pinimg.com/474x/f8/99/8b/f8998b0b2ea04904e8e86a7035302d2f.jpg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="dark:text-white text-2xl font-semibold mb-4 ">Login</h1>
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label htmlFor="username" className="block dark:text-blue-600 text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block dark:text-blue-600 text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>

            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            {err && <p style={{ color: 'red' }}>{err}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-blue-500 text-center">
            <Link to="/Signup" className="hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
