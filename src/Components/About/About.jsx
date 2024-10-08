// import React from 'react';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center py-8 rounded-xl text-3xl md:text-4xl lg:text-5xl tracking-tight text-blue-600 font-extrabold italic font-serif">About This App</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Image */}
          <div className="bg-teal-800 shadow-md shadow-cyan-500/50 rounded-lg p-6 mb-8 md:mb-0 md:w-1/3">
            <img 
              className="rounded-full w-full object-cover" 
              src="https://i.pinimg.com/474x/4a/9e/b8/4a9eb8a1ac9f59199c039ced6786d825.jpg" 
              alt="Profile" 
            />
          </div>
          
          {/* Right Side: Future Plans */}
          <div className="bg-gray-800 text-white  shadow-2xl shadow-cyan-500/50 rounded-lg p-6 md:w-2/3 md:ml-8">
            <h3 className="text-xl font-semibold  mb-4">Future Plans</h3>
            <p className=" text-lg leading-relaxed">
                  
                  Welcome to my React practice app! This website serves as a showcase of my ongoing journey in learning
                   and mastering React. It features a collection of small projects and practice code that I’ve developed
                    as I explore React.<br/>
                  From building simple components to integrating hooks, implementing routing, and applying CSS for
                   styling, each feature of this app reflects my hands-on experience with React.
                   <br/>As I delve deeper into React and explore more advanced concepts, this app will continue to evolve.<br/>
                   
                   I plan to regularly add new projects and features to reflect my growing expertise. Stay tuned for updates that will introduce more complex functionalities and demonstrate my progress.
                  This app is not only a learning tool but also a portfolio of my practical skills in React development.
                   I hope you find it both informative and engaging!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
