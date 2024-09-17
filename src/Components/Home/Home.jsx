
import Intro from "./Intro";

function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-0.5">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <div className="dark:bg-gray-900 bg-white p-4 rounded-lg">
              <p className="leading-relaxed text-gray-900 dark:text-white font-serif font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span>Where,</span>
                <br />
                <span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium italic text-red-700">
                    Code Sparks <span className="text-red-700">Creativity</span>
                  </span>
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Explore My React Journey
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.pexels.com/photos/12899158/pexels-photo-12899158.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-16 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>

          
        </div>

      
      </section>
      <Intro/>
    </>
  );
}

export default Home;
