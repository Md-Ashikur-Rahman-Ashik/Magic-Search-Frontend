import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const { count } = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(count);
  const carQuery = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/cars");
      const data = await response.data;
      return data;
    },
  });

  // const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // const pages = [];
  // for (let i = 0; i < numberOfPages; i++) {
  //   pages.push(i);
  // }
  // console.log(pages);

  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container p-6 mx-auto">
      <h2 className="text-5xl text-center font-bold text-[#333333]">
        Explore your car
      </h2>
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {carQuery?.data?.map((car) => (
          <ProductCard key={car._id} car={car}></ProductCard>
        ))}
      </div>
      <div className="mt-16 flex justify-center items-center gap-4">
        <button
          onClick={handlePrevPage}
          className="btn text-2xl bg-black text-white hover:text-black font-bold"
        >
          Previous
        </button>
        {pages.map((page) => (
          <button
            className={`btn text-2xl bg-black text-white hover:text-black font-bold ${
              currentPage === page && "bg-blue-500"
            }`}
            onClick={() => {
              setCurrentPage(page);
            }}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="btn text-2xl bg-black text-white hover:text-black font-bold"
        >
          Next
        </button>
        <div className="flex gap-4 border-2 p-2 rounded-xl">
          <span className="font-bold text-2xl">Items Per Page :</span>
          <select
            className="font-bold text-2xl"
            onChange={handleItemsPerPage}
            value={itemsPerPage}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
