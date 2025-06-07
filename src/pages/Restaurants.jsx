import React, { useEffect, useState } from "react";



const Restaurants = () => {
  const [restaurantCards, setRestaurantCards] = useState();

  useEffect(() => {
    const restData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        console.log(json.data.cards);
        setRestaurantCards(json.data?.cards[2]);

        //console.log(restaurantCards);
      } catch (error) {
        console.log(error);
      }
    };
    restData();
  }, []);
  useEffect(() => {
    console.log(restaurantCards); // ✅ now logs only after restaurantCards is set
  }, [restaurantCards]);
  return (
    <>
      <h3>Restaurants </h3>
      
      {/* <h3>{restaurantCards.card?.card?.header?.title}</h3> */}
  
    </>
  );
};

export default Restaurants;
