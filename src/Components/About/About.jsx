// import React from 'react';

const About = () => {
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6 sm:px-8 md:px-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About This App</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-8">
            {/* Left Side: Image */}
            <div className="bg-teal-800 shadow-md rounded-lg p-6 mb-8 md:mb-0 md:w-1/3">
              <img 
                className="rounded-full w-full object-cover" 
                src="https://i.pinimg.com/474x/4a/9e/b8/4a9eb8a1ac9f59199c039ced6786d825.jpg" 
                alt="Profile" 
              />
            </div>
            
            {/* Right Side: Future Plans */}
            <div className="bg-white shadow-md rounded-lg p-6 md:w-2/3 md:ml-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Future Plans</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to my React practice app! This website serves as a showcase for my ongoing journey 
                in learning and mastering React. This app is a collection of small projects and practice 
                code that I have developed as I explore React.
                <br/><br/>
                From building simple components to integrating hooks, implementing routing, and styling with CSS, 
                each feature of this app reflects my hands-on experience with React.
                <br/><br/>
                I plan to add more features as I explore React in depth, incorporating new projects and complex functionalities.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  