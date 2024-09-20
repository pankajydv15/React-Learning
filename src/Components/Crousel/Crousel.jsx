import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,

    
  };

  return (

    
    <div className="bg-white dark:bg-gray-900 mt-0.5">
      <div className="container mx-auto px-10">
        <h2 className="text-center py-8 rounded-xl text-3xl md:text-4xl lg:text-5xl tracking-tight text-blue-600 font-extrabold italic font-serif"> Interactive React Creations Unveiled</h2>
        <Slider {...settings}>
          <div >
            <div className="bg-white dark:bg-gray-900 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/96/93/87/969387144ac9783e5d7d441a4d0cb39d.jpg"
                  alt="card-image"
                  className="h-full w-full rounded-md md:rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  STARTUP
                </div>
                <h4 className="mb-2 text-blue-600 text-xl font-semibold">
                  Built with ReactJS, Styled with Tailwind: A Modern, Responsive
                  Web Experience
                </h4>
                <p className="mb-8 text-black dark:text-white leading-normal font-light">
                  This website is developed using ReactJS, leveraging the power
                  of components and hooks for dynamic functionality. The design
                  is crafted with Tailwind CSS, a modern open-source
                  utility-first framework, allowing for responsive and fast UI
                  development. Tailwind&apos;s simplicity and flexibility made
                  the styling process efficient and highly customizable.
                </p>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold text-sm hover:underline flex items-center"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /> */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-900 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/d7/76/3a/d7763a9b7e5f25f30ac96102d9854801.jpg"
                  alt="card-image"
                  className="h-full w-full rounded-md md:rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  STARTUP
                </div>
                <h4 className="mb-2 text-blue-600 text-xl font-semibold">
                  From Small to Large Projects: Powered by React Routing
                </h4>
                <p className="mb-8 text-black  dark:text-white leading-normal font-light">
                  This website showcases a range of projects, from small apps to
                  larger implementations, all with full routing support. By
                  exploring React&apos;s powerful routing capabilities, I was
                  able to create seamless navigation between pages, enhancing
                  both user experience and project structure.
                </p>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold text-sm hover:underline flex items-center"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /> */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-900 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/fd/ae/6b/fdae6b070f07090486b765e4c02a1dcc.jpg"
                  alt="card-image"
                  className="h-full w-full rounded-md md:rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  STARTUP
                </div>
                <h4 className="mb-2 text-blue-600 text-xl font-semibold">
                  Custom Theme Logic: Light or Dark Mode, Built from Scratch
                  with React
                </h4>
                <p className="mb-8 text-black  dark:text-white leading-normal font-light">
                  This website supports both light and dark themes, with custom
                  logic I developed during my React learning journey. By
                  mastering React hooks and state management, I created a
                  dynamic theme toggle that enhances the user experience across
                  different environments
                </p>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold text-sm hover:underline flex items-center"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /> */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-900 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="h-full w-full rounded-md md:rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  STARTUP
                </div>
                <h4 className="mb-2 text-blue-600 text-xl font-semibold">
                  Dynamic Carousel with React-Slick: A Learning Milestone in My
                  React Journey
                </h4>
                <p className="mb-8 text-black  dark:text-white leading-normal font-light">
                  I created a responsive carousel using the react-slick library,
                  which I integrated into my React app during my learning
                  journey. By installing and customizing react-slick, I was able
                  to build a dynamic, user-friendly slider component that
                  enhances the visual appeal of the website.
                </p>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold text-sm hover:underline flex items-center"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /> */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default App;
