import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-white p-4 text-center">
            <h1 className="mb-4 text-2xl lg:text-5xl font-semibold">Click on the button to view your cards!</h1>
            <Link to='/cardview' className="bg-blue-600 btn hover:bg-blue-600 text-white"><button></button> View your cards</Link>
        </div>
    );
};

export default Home;