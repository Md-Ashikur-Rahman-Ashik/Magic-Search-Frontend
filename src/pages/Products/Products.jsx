import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const carQuery = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/cars");
      const data = await response.data;
      return data;
    },
  });

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
    </div>
  );
};

export default Products;
