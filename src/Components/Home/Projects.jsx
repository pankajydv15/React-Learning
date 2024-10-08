import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      // If not logged in, redirect to login page
      navigate("/card");
    }
  }, [navigate]);

  
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
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-900 dark:text-gray-300 mb-6">
        Log in to dive into <span className="text-blue-600">Project</span> Based  <span className="text-blue-600">Learning </span>and access exclusive projects!
          </h1>
            <Link to="/login">
          <button>Start Here</button>
            </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
