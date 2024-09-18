import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  /*usestate mai 2 value pass hogi yha humne counter or setCounter pass kiya hai setcounter ki jgha
  mai pankajcounter bhi pass kr skta tha mtlb meri mrzi hai kuch bhi pass kr skta hu  ye bass ek reffrence holder hai*/

  // let counter = 15

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    // console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
    <section className="bg-white dark:bg-gray-900 mt-0.5">
      <div className="min-h-screen p-4 rounded-xl mt-4 grid items-center justify-center">
        <div className="w-full max-w-md m-44 mx-auto shadow-md rounded-lg px-8 py-8 text-orange-500 bg-gray-700">
          <h1 className="grid items-center justify-center">Toggle Button</h1>
          <h3 className=" grid items-center justify-center">Counter value: <h4 className=" bg-black p-4 rounded-xl mt-4 text-3xl grid items-center justify-center"> {counter}</h4></h3>

          <button
            className=" m-4 font-bold py-3 px-6 rounded-full"
            onClick={addValue}
          >
            Add value
          </button>
          <br />
          <button
            className=" font-bold py-3 px-6 rounded-full"
            onClick={removeValue}
          >
            Remove value
          </button>
        </div>
      </div>
      </section>
    </>
  );
}

export default Counter;
