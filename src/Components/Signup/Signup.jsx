import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handelForm = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when the form is submitted

    if (!name || !password || !email) {
      setErr('All fields are required');
      setLoading(false); // Stop loading
    } else if (password.length < 4) {
      setErr('Password Must be at least 4 char');
      setLoading(false); // Stop loading
    } else {
      setErr('');
      const userdata = {
        name,
        email,
        password,
      };

      try {
        const response = await fetch('https://reactbackend-hv2w.onrender.com/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userdata),
        });
        const result = await response.json();
        if (response.ok) {
          setSuccess('Signup Successful');
          setName('');
          setEmail('');
          setPassword('');
        } else {
          setErr(result.message || 'Signup Failed');
        }
      } catch (error) {
        setErr('Error submitting the form. Please try again.');
      } finally {
        setLoading(false); // Stop loading once the request finishes
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="flex justify-center items-center">
          <img
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            src="https://i.pinimg.com/474x/a4/1b/48/a41b48051dc7bc32b8686260cc0fb4da.jpg"
            alt="Learning journey"
          />
        </div>

        <div>
          <div className="max-w-lg mx-auto sm:px-6 lg:px-8">
            <div className="p-8 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-extrabold mb-6">
                SIGNUP
              </h1>
              <form onSubmit={handelForm} className="flex flex-col">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="text-gray-700 dark:text-gray-300 font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ease-in-out"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="email"
                    className="text-gray-700 dark:text-gray-300 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ease-in-out"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="password"
                    className="text-gray-700 dark:text-gray-300 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ease-in-out"
                  />
                </div>

                {err && <p style={{ color: 'red' }}>{err}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                {/* Display loading message */}
                {loading && <p className='text-green-500'>Loading...</p>}
                
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-orange-500 transition-colors ease-in-out duration-300"
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
