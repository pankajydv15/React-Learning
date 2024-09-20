import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <section className=" bg-white dark:bg-gray-900">
        <div className="container mt-0.5 ">
          <h2 className="text-center py-8 rounded-xl text-3xl md:text-4xl lg:text-5xl tracking-tight text-blue-600 dark:text-cyan-400 font-extrabold italic font-serif">
            <span className="text-4xl text-blue-600 dark:text-cyan-400 md:text-5xl">T</span>𝐢𝐧𝐲{" "}
            <span className="text-4xl text-blue-600 dark:text-cyan-400 md:text-5xl">P</span>
            𝐫𝐨𝐣𝐞𝐜𝐭𝐬,
            <br />
            <span className="ml-10 md:ml-32 lg:ml-48 mt-2">
              <span className="text-4xl text-blue-600 dark:text-cyan-400 md:text-5xl">H</span>𝐮𝐠𝐞{" "}
            </span>
            <span className="text-4xl text-blue-600 dark:text-cyan-400 md:text-5xl">L</span>
            𝐞𝐚𝐫𝐧𝐢𝐧𝐠𝐬
          </h2>
        </div>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <Link
            to="/Counter"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-blue-600 dark:text-cyan-400 mb-2 text-2xl font-bold tracking-tight ">
                Counter Project
              </h5>
              <p className="mb-3 font-normal text-blue-600 dark:text-cyan-400">
                A simple counter app built with Vite and React, allowing users
                to increment or decrement a numerical value.
              </p>
            </div>
          </Link>

          <Link
            to="/Toggle"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-cyan-400">
                Toggle Button{" "}
              </h5>
              <p className="mb-3 font-normal  text-blue-600 dark:text-cyan-400">
                The Toggle Button only have the functionality of OFF & ON.
              </p>
            </div>
          </Link>

          <Link
            to="/BgChanger"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-blue-600 dark:text-cyan-400">
                Background Color Changer
              </h5>
              <p className="mb-3 font-normal  text-blue-600 dark:text-cyan-400">
                A User can changes the color of the Background by clicking on
                the Button.
              </p>
            </div>
          </Link>

          <Link
            to="/PasswordGenerator"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-cyan-400">
                Password Generator
              </h5>
              <p className="mb-3 font-normal text-blue-600 dark:text-cyan-400">
                A User can Generate the Password.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Card;
