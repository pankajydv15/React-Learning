import { Link } from "react-router-dom"

function Card() {
  return (
    <>
        <section className=" bg-white dark:bg-gray-800">
        <h2 className="bg-teal-200 text-center py-4 rounded-xl mb-4 text-4xl tracking-tight font-extrabold italic font-serif font-normal text-red-600">Projects</h2>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <Link to="/Counter" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-red-500 mb-2 text-2xl font-bold tracking-tight text-gray-900">Counter Project</h5>
                        <p className="mb-3 font-normal text-gray-700 text-cyan-400">A simple counter app built with Vite and React, allowing users to increment or decrement a numerical value.</p>
                    </div>
                </Link>

                <Link to="/Toggle" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-red-500">Toggle Button </h5>
                        <p className="mb-3 font-normal text-gray-700 text-cyan-400">The Toggle Button only have the functionality of OFF & ON.</p>
                    </div>
                </Link>

                <Link to="/BgChanger" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-red-500">Background Color Changer</h5>
                        <p className="mb-3 font-normal text-gray-700 text-cyan-400">A User can changes the color of the Background by clicking on the Button.</p>
                    </div>
                </Link>

                <Link to="/PasswordGenerator" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-red-500">Password Generator</h5>
                        <p className="mb-3 font-normal text-gray-700 text-cyan-400">A User can Generate the Password.</p>
                    </div>
                </Link>
        </div>
        </section>

    </>
  )
}

export default Card
