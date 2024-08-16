const ProductCard = ({ car }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <img src={car.image} className="w-full" alt="Album" />
      </figure>
      <div className="p-8">
        <div className="flex justify-between mb-2">
          <p className="font-bold">{car.location}</p>
          <p className="font-bold">Participants: {car.participantCount}</p>
        </div>
        <h2 className="text-xl font-bold text-green-500 mb-4 text-center">
          {car.campName}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
