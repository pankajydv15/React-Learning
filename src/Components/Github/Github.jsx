import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/pankajydv15")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-white dark:bg-gray-900 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <div>
        <div className=" flex items-center justify-center ">
          <img className="text-center"src={data.avatar_url}alt="Git Pic"width={300}/>
          {data.bio}
        </div>
      </div>
    </div>
  );
}

export default Github;
