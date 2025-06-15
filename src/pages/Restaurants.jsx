import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
const Restaurants = () => {
  const [restaurantCards, setRestaurantCards] = useState([]);
  useEffect(() => {
    const restData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        console.log(json.data.cards);
        setRestaurantCards(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //console.log(restaurantCards);
      } catch (error) {
        console.log(error);
      }
    };
    restData();
  }, []);

  useEffect(() => {
    console.log(restaurantCards); // ✅ now logs only after restaurantCards is set
    // console.log(
    //   restaurantCards?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  }, [restaurantCards]);

  return (
    <>
      <h3>Restaurants </h3>
      {restaurantCards == null ||
        (restaurantCards.length === 0 && <p> No Cards...</p>)}
      {restaurantCards.length > 0 && (
        <div className="flex flex-wrap m-6">
          {restaurantCards?.map((restCard, index) => (
            <RestaurantCard resData={restCard} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Restaurants;
