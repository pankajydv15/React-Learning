import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonText = () => {
    if (isVisible) {
      return "Hide Text";
    } else {
      return "Show Text";
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900 mt-0.5">

    <div className=" p-4 rounded-xl mt-4 grid items-center justify-center">
      <div className="w-full max-w-md m-44 mx-auto shadow-md rounded-lg px-8 py-8 text-orange-500 bg-gray-700">
        <button onClick={() => setIsVisible(!isVisible)}>
          {handleButtonText()}
        </button>
        {isVisible && <p >This text is hidden by default.</p>}
      </div>
    </div>
    </section>
  );
}

export default Toggle;
