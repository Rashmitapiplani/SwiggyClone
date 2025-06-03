import React, { useEffect, useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();

        console.log("API response:", json);

        // const cards = json?.data?.cards || [];

        // const restaurantCards = cards
        //   .map((card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //   .filter(Boolean)
        //   .flat();

        // setRestaurants(restaurantCards);

      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);
  for(let i=0;i<10;i++)

    {
        console.log(i);
    }
  return (
      <div>
        {restaurants.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant.info.id}>{restaurant.info.name}</li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default Restaurants;
