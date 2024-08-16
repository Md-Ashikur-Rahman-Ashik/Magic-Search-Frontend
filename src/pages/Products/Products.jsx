import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Products = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [search, setSearch] = useState("");
  const { count } = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(count);
  const onSubmit = (data) => {
    setSearch(data.searchText);
    // console.log(data.searchText);
  };
  const {
    data: cars,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      // refetch();
      const response = await axios.get(
        `http://localhost:5000/cars?page=${
          currentPage - 1
        }&size=${itemsPerPage}&search=${search}`
      );
      const data = await response.data;
      return data;
    },
  });

  // console.log(cars);

  // const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  console.log(pages);

  // const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(1);
    // refetch();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    refetch();
  }, [currentPage, refetch, itemsPerPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  // refetch();

  return (
    <div className="container p-6 mx-auto">
      <h2 className="text-5xl text-center font-bold text-[#333333]">
        Explore your car
      </h2>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
          <input
            type="text"
            {...register("searchText")}
            placeholder="Search with car name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            className="btn bg-blue-500 hover:text-black text-white font-bold"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cars?.map((car) => (
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
              refetch();
              // refetch();
              // console.log(page);
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
