import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

const FilterSort = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Generate random categories using faker
    const generatedCategories = new Set(); // Use Set to avoid duplicates
    for (let i = 0; i < 50; i++) {
      const category = faker.commerce.department();
      generatedCategories.add(category); // Add category to Set
    }
    setCategories([...generatedCategories]); // Convert Set back to array
  }, []);
  // Combine filter and sort handling in a single effect
  useEffect(() => {
    // Filter products based on category and price
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesPriceRange = priceRange
        ? filterByPrice(product.price, priceRange)
        : true;
      return matchesCategory && matchesPriceRange;
    });


    // Sort the filtered products based on the selected option
    const sorted = filtered.sort((a, b) => {
      switch (sortOption) {
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "popularity":
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

    // Update the filtered and sorted products
    setFilteredProducts(sorted);
  }, [selectedCategory, priceRange, sortOption, products, setFilteredProducts]);

  // Helper function for price range filtering
  const filterByPrice = (price, range) => {
    switch (range) {
      case "low":
        return price < 50;
      case "medium":
        return price >= 50 && price <= 150;
      case "high":
        return price > 150;
      default:
        return true;
    }
  };

  return (
    <div  className="filter-sort flex flex-wrap justify-between gap-4 p-4">
      <label className="flex flex-col sm:flex-row sm:items-center">
        Category:
        <select
        className="border ml-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
        </select>
      </label>

      <label className="flex flex-col sm:flex-row sm:items-center">
        Price Range:
        <select
        className="border ml-2"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $150</option>
          <option value="high">Above $150</option>
        </select>
      </label>

      <label className="flex flex-col sm:flex-row sm:items-center">
        Sort By:
        <select
        className="border ml-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">None</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSort;
