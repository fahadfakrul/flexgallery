import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import FilterSort from "./Components/FilterSort";
import ProductGallery from "./Components/ProductGallery";

//generate products using fakerjs
const generateProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: i + 1,
      name: faker.commerce.productName(),
      image: `https://picsum.photos/240/280?random=${i}`, // Use random image from Picsum
      price: parseFloat(faker.commerce.price(10, 200, 2)),
      category: faker.commerce.department(),
      popularity: parseFloat(
        faker.number.float({ min: 3.0, max: 5.0 }).toFixed(1)
      ), // Use number.float()
      description: faker.commerce.productDescription(),
      rating: parseFloat(faker.number.float({ min: 3.0, max: 5.0 }).toFixed(1)),
    });
  }
  return products;
};

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const data = generateProducts(100);
    setProducts(data);
    setFilteredProducts(data);
    console.log(data);
  }, []);


  // Function to handle search in NavBar
  const handleSearch = (searchTerm) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  
  return (
    <>
      <div className="container mx-auto border">
        <NavBar onSearch={handleSearch} />
        <hr className=" my-5" />
        <FilterSort
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
        <hr className=" mt-5" />
        <ProductGallery products={filteredProducts} />
      </div>
    </>
  );
}

export default App;
