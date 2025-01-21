import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; 
import "./menu.css";

const RandomMenuu = () => {
  const [allDishes, setAllDishes] = useState([]); // Store all dishes from the API
  const [filteredDishes, setFilteredDishes] = useState([]); // Store filtered dishes
  const [searchTerm, setSearchTerm] = useState(""); // Store the search input
  const apiKey = "04c515bc996e4dc182f7545b24c4d767"; 

  useEffect(() => {
    // Check if data exists in cookies
    const cachedData = Cookies.get("menuData");
    if (cachedData) {
      console.log("Loading data from cookies...");
      const parsedData = JSON.parse(cachedData);
      setAllDishes(parsedData);
      setFilteredDishes(parsedData);
      return;
    }

    // Fetch data if not found in cookies
    console.log("Fetching data from API...");
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=10&addRecipeInformation=true&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const dishes = data.results.map((dish) => ({
          title: dish.title,
          image: dish.image,
          servings: dish.servings,
          price: dish.pricePerServing
            ? `$${(dish.pricePerServing / 100).toFixed(2)}`
            : "N/A",
          dishTypes: dish.dishTypes || [],
        }));
        setAllDishes(dishes);
        setFilteredDishes(dishes);

        // Store data in cookies 
        Cookies.set("menuData", JSON.stringify(dishes), { expires: 1 });
      })
      .catch((error) => console.error("Error fetching dishes:", error));
  }, [apiKey]);

  // Filter dishes based on search input
  useEffect(() => {
    const filtered = allDishes.filter((dish) =>
      dish.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDishes(filtered);
  }, [searchTerm, allDishes]);

  // Filter dishes based on category
  const filterByCategory = (category) => {
    const filtered = allDishes.filter((dish) =>
      dish.dishTypes.includes(category.toLowerCase())
    );
    setFilteredDishes(filtered);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="filter-buttons">
        <div onClick={() => filterByCategory("soup")} className="image-button">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.eWAG0PwQXBN6e7jRyr5iYQHaE7&pid=Api&P=0&h=180"
            alt="Soup"
          />
          <p>Soup</p>
        </div>

        <div
          onClick={() => filterByCategory("main course")}
          className="image-button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Chicken_Biryani.jpg"
            alt="Main Course"
          />
          <p>Main Course</p>
        </div>
        <div
          onClick={() => filterByCategory("side dish")}
          className="image-button"
        >
          <img
            src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2016/08/c10bd2956df3521c2c61d517a8bcbf628c51f650.jpeg"
            alt="Side Dish"
          />
          <p>Side Dish</p>
        </div>
      </div>

      {/* Dish Display */}
      <div className="menu">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish, index) => (
            <div className="menu-cards" key={index}>
              <img src={dish.image} alt={dish.title} />
              <h3>{dish.title}</h3>
              <p>Price: {dish.price}</p>
              <p>Serves: {dish.servings}</p>
            </div>
          ))
        ) : (
          <p>Oops! No Dishes Found.</p>
        )}
      </div>
    </div>
  );
};

export default RandomMenuu;
