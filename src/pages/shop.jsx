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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/furniture"
      );
      const data = await response.json();
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full lg:w-[1440px] mx-auto mt-20 text-md">
      <div className="nav w-full lg:w-[1440px]">
        <Nav />
      </div>
      <div className="lg:text-3xl font-bold my-5">
        Check out our available items
      </div>
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {loading && (
          <p className="text-black text-2xl">Loading items, please wait...</p>
        )}

        {error && <p>Error: {error.message}</p>}
        {products.map((product, index) => (
          <div key={product.id}>
            <ProductCard
              // id={product.id}
              // image={images[Math.floor(Math.random() * images.length)]}
              image={images[index % images.length]}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              discount={product.discountPercentage}
              availstatus={product.availabilityStatus}
            />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
export default Shop;
