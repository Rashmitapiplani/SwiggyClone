const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, avgRating, cuisines } = resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="bg-white shadow-md rounded-xl p-4 m-4 w-72 hover:scale-105 transition-transform">
      <img
        className="w-full h-40 object-cover rounded-lg mb-4"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />

      <h3 className="font-bold">{resData?.info?.name}</h3>
      <div className="flex flex-1 gap-2">
        <span className="">{avgRating}</span>
        <span>.</span>
        <span>{slaString}</span>
      </div>
      <div>{cuisines.join(",")}</div>
    </div>
  );
};

export default RestaurantCard;
