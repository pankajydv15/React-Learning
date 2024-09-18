import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/pankajydv15")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="m-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
            src={data.avatar_url}
            alt="Git Pic"
          />
        </div>
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Github Followers: {data.followers}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            {data.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Github;
