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
    reset,
    formState: { errors },
  } = useForm();
  const [asc, setAsc] = useState("");
  const [newest, setNewest] = useState("");
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(count);
  const onSubmit = (data) => {
    setSearch(data.searchText);
    // console.log(data.searchText);
    setCurrentPage(1);
  };
  const { count } = useLoaderData();

  const {
    data: cars,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      // refetch();
      const response = await axios.get(
        `https://magic-search-backend.vercel.app/cars?page=${
          currentPage - 1
        }&size=${itemsPerPage}&search=${search}&sort=${asc}&newest=${newest}&brand=${brandName}&category=${category}&price=${price}`
      );
      const data = await response.data;
      return data;
    },
  });

  // console.log(cars);

  // const itemsPerPage = 10;

  // console.log(pages);

  // const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(1);
    // refetch();
  };

  const handleBrandName = (e) => {
    // console.log(e.target.value);
    const val = e.target.value;
    setBrandName(val);
  };

  const handleCategory = (e) => {
    const val = e.target.value;
    setCategory(val);
  };

  const handlePrice = (e) => {
    const val = e.target.value;
    setPrice(val);
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
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    refetch();
  }, [
    currentPage,
    refetch,
    itemsPerPage,
    search,
    asc,
    newest,
    brandName,
    category,
    price,
  ]);

  // console.log("Revised the site");

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
      <div className="flex md:flex-row flex-col justify-center mt-4 md:gap-4 items-center">
        <div className="flex justify-center md:gap-4 gap-2 items-center">
          <p className="font-bold">Filter Price :</p>
          <button
            onClick={() => {
              setNewest("");
              setAsc("asc");
            }}
            className="btn font-bold bg-black text-white hover:text-black"
          >
            Low to High
          </button>
          <div>
            <button
              onClick={() => {
                setNewest("");
                setAsc("desc");
              }}
              className="btn font-bold bg-black text-white hover:text-black"
            >
              High to Low
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2 md:mt-0 gap-4 items-center">
          <p className="font-bold">Filter Date :</p>
          <button
            onClick={() => {
              setAsc("");
              setNewest("newest");
            }}
            className="btn font-bold bg-black text-white hover:text-black"
          >
            Newest first
          </button>
          <div>
            <button
              onClick={() => {
                setAsc("");
                setNewest("oldest");
              }}
              className="btn font-bold bg-black text-white hover:text-black"
            >
              Oldest first
            </button>
          </div>
        </div>
      </div>
      <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 mt-4 gap-4 items-center">
        <div className="flex justify-center gap-4 items-center">
          <p className="font-bold">Filter Brand :</p>
          <div className="border-2 p-2 rounded-xl">
            <select
              className="font-bold"
              onChange={handleBrandName}
              value={brandName}
            >
              <option value="">Choose car brand</option>
              <option value="Tesla">Tesla</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Honda">Honda</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Toyota">Toyota</option>
              <option value="Jeep">Jeep</option>
              <option value="Nissan">Nissan</option>
              <option value="Subaru">Subaru</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Porsche">Porsche</option>
              <option value="Lexus">Lexus</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Mazda">Mazda</option>
              <option value="Kia">Kia</option>
              <option value="Alfa Romeo">Alfa Romeo</option>
              <option value="Volvo">Volvo</option>
              <option value="Cadillac">Cadillac</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Acura">Acura</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Maserati">Maserati</option>
              <option value="Bentley">Bentley</option>
              <option value="Aston Martin">Aston Martin</option>
              <option value="Rolls-Royce">Rolls-Royce</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="McLaren">McLaren</option>
              <option value="Bugatti">Bugatti</option>
              <option value="Pagani">Pagani</option>
              <option value="Koenigsegg">Koenigsegg</option>
              <option value="Rimac">Rimac</option>
              <option value="Lucid">Lucid</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <p className="font-bold">Filter Category:</p>
          <div className="border-2 p-2 rounded-xl">
            <select
              className="font-bold"
              onChange={handleCategory}
              value={category}
            >
              <option value="">Choose car category</option>
              <option value="Electric">Electric</option>
              <option value="Sports">Sports</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Compact">Compact</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <p className="font-bold">Price Range:</p>
          <div className="border-2 p-2 rounded-xl">
            <select className="font-bold" onChange={handlePrice} value={price}>
              <option value="">Choose Price Range</option>
              <option value="first">$20,000 - $50,000</option>
              <option value="second">$50,000 - $100,000</option>
              <option value="third">$100,000 - $200,000</option>
              <option value="fourth">$200,000 - $500,000</option>
              <option value="fifth">$500,000 - $1,000,000</option>
              <option value="sixth">$1,000,000 - $3,500,000</option>
            </select>
          </div>
        </div>
        <div className="lg:col-span-3 flex justify-end lg:justify-center">
          <button
            onClick={() => {
              setSearch("");
              setAsc("");
              setNewest("");
              setBrandName("");
              setCategory("");
              setPrice("");
              reset();
            }}
            className="btn font-bold bg-black text-white hover:text-black"
          >
            Clear all filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cars?.map((car) => (
          <ProductCard key={car._id} car={car}></ProductCard>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-3 lg:grid-cols-8 md:grid-cols-6 justify-center items-center gap-4">
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
        <div className="flex gap-4 col-span-3 md:gap-0 lg:col-span-2 border-2 md:col-span-6 justify-center p-2 rounded-xl">
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
