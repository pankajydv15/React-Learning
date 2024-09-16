// import Counter from "./01_Counter/Counter";
// import { Link } from "react-router-dom";
import Card from "./Card";


function Home(){
    return(

        <>
        
        <section className=" bg-white dark:bg-gray-800">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="bg-teal-500 text-center py-4 rounded-xl mb-5 text-4xl tracking-tight font-extrabold italic font-serif font-normal text-red-600">Welcome to React Learning</h2>
                    <p className=" font-serif font-normal mb-4">This React website is a part of my learning journey, where I've added all my practice code as I learn React. It's fully responsive, making it accessible across all devices. Working with React has given me a great opportunity to understand component-based architecture, state management, and user interface design. 
                        All my small projects and experiments are integrated into this website, showcasing everything I've learned so far.</p>
                    <p className=" font-serif font-normal mb-4">I am a learner, designer, and developer. Constantly experimenting and problem-solving. Continuously working on projects, small enough to be simple yet effective.</p>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-8">
                    <img className=" w-full rounded-lg" src="https://images.pexels.com/photos/12899158/pexels-photo-12899158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="office content 1"/>
                    <img className=" mt-4 w-full lg:mt-16 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                </div>
            </div>

            {/* <Card/> */}
        </section>
        </>
    )
}

export default Home;