import Nav from "../../components/nav";
import { HiArrowRight } from "react-icons/hi";
import hero1 from "../../assets/images/hero1.jpg";
import { Link } from "react-router";
function Slide1() {
  return (
    <div className="w-full lg:w-[1440px] mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div className=" w-full">
          <nav className="w-full bg-[#010031] p-2 md:bg-transparent fixed md:absolute top-0 left-0 md:left-10 md:top-10">
            <Nav />
          </nav>
          <img
            src={hero1}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 my-15">
          <div className="w-full flex flex-col gap-10 px-2 md:mx-auto md:w-[450px] ">
            <h2 className="font-bold text-4xl">
              Discover innovative ways to decorate
            </h2>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <Link to="/shop" className="flex items-center gap-2">
              <p className="tracking-[10px] uppercase ">Shop Now</p>
              <span>
                <HiArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
