import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-10 mx-auto">
      <div
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.7)), url("https://i.ibb.co/s3CQjTR/Banner.png")`,
        }}
        className="relative w-full bg-cover rounded-xl"
      >
        <div className="h-full text-white min-h-[calc(100vh-150px)] w-full flex flex-col p-4 items-center gap-6 justify-center">
          <h1 className="text-3xl font-bold md:text-5xl flex flex-col gap-2">
            {"Welcome To Magic Search"}
          </h1>
          <p className="w-full text-xl text-center">
            {"Explore the magic of search and become a car enthusiast."}
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            <Link to={"/products"}>Explore Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
