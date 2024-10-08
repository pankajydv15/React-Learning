import { useEffect, useState } from "react";

function Rendring() {
  const [count, setCount] = useState(0);
  const [kill, setStop] = useState(null);

  useEffect(() => {
    const stop = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    setStop(stop);

    return () => clearTimeout(stop);
  }, [count]);

  const stopTimer = function () {
    if (kill) {
      clearTimeout(kill);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-0.5">
      <div className=" p-4 rounded-xl grid items-center justify-center">
        <div className="w-full max-w-md m-44 mx-auto shadow-md rounded-lg px-8 py-8 text-orange-500 bg-gray-700">
          <h1>I have Rendered {count} times</h1>
          <button
            onClick={() => {
              setTimeout(() => {
                setCount((count) => count + 1);
              });
            }}
          >
            START
          </button>
          <button onClick={stopTimer}>STOP</button>
        </div>
      </div>
    </section>
  );
}

export default Rendring;
