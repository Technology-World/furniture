import { useState, useEffect } from "react";
import ProductCard from "../components/productcard";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Shop() {
  const images = [hero1, hero2, hero3];
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/furniture"
      );
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products); // Initialize filtered products with all products
      // console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="w-full lg:w-[1440px] mx-auto mt-20 text-md">
      <div className="nav w-full lg:w-[1440px]">
        <Nav />
      </div>
      
      {/* Search Bar Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5 gap-4">
        <div className="lg:text-3xl font-bold">
          Check out our available items
        </div>
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {loading && (
          <p className="text-black text-2xl">Loading items, please wait...</p>
        )}

        {error && <p>Error: {error.message}</p>}
        
        {filteredProducts.length === 0 && !loading ? (
          <p className="text-black text-xl col-span-full text-center">
            No products match your search.
          </p>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={product.id}>
              <ProductCard
                image={images[index % images.length]}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                discount={product.discountPercentage}
                availstatus={product.availabilityStatus}
              />
            </div>
          ))
        )}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;