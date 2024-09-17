import React from "react";

function Intro() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="flex justify-center items-center">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Learning journey"
          />
        </div>

        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gray-900 dark:text-gray-300 mb-6">
            A Journey Through <span className="text-red-700">Code</span> and <span className="text-red-700">Creativity</span>
          </h1>
          <p className="font-serif font-normal mb-4 text-gray-900 dark:text-gray-300">
            This React website is a part of my learning journey, where I&apos;ve
            added all my practice code as I learn React. It&apos;s fully
            responsive, making it accessible across all devices. Working with
            React has given me a great opportunity to understand component-based
            architecture, state management, and user interface design. All my
            small projects and experiments are integrated into this website,
            showcasing everything I&apos;ve learned so far.
          </p>
          <p className="font-serif font-normal mb-4 text-gray-900 dark:text-gray-300">
            I am a learner, designer, and developer. Constantly experimenting
            and problem-solving. Continuously working on projects, small enough
            to be simple yet effective.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
