import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const { count } = useLoaderData();
  // console.log(count);
  const carQuery = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/cars");
      const data = await response.data;
      return data;
    },
  });

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // const pages = [];
  // for (let i = 0; i < numberOfPages; i++) {
  //   pages.push(i);
  // }
  // console.log(pages);

  const pages = [...Array(numberOfPages).keys()];

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
      <div className="mt-10 flex justify-center gap-4">
        {pages.map((page) => (
          <button className="btn text-3xl font-bold" key={page}>{page}</button>
        ))}
      </div>
    </div>
  );
};

export default Products;
