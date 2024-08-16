const ProductCard = ({ car }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <img src={car.image} className="w-full h-80" alt="Album" />
      </figure>
      <div className="p-8">
        <div className="flex justify-between mb-2">
          <p className="font-bold">Brand: {car.brand}</p>
          <p className="font-bold">Date: {car.creationDate}</p>
        </div>
        <h2 className="text-xl font-bold bg-black p-1 rounded-xl text-[#F4F4F4] mb-4 text-center">
          {car.name}
        </h2>
        <p className="font-bold text-center">Price: ${car.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
