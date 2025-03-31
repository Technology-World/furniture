import Nav from "../../components/nav";
import { HiArrowRight } from "react-icons/hi";
import hero2 from "../../assets/images/hero2.jpg";
import { Link } from "react-router";
function Slide2() {
  return (
    <div className="w-full lg:w-[1440px] mx-auto bg-white text-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div className=" w-full">
          <nav className="w-full bg-[#010031] p-2 md:bg-transparent fixed md:absolute top-0 left-0 md:left-10 md:top-10">
            <Nav />
          </nav>
          <img
            src={hero2}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 my-15">
          <div className="w-full flex flex-col gap-10 px-2 md:mx-auto md:w-[450px] ">
            <h1 className="font-bold text-4xl">
              We are available all across the globe
            </h1>
            <p>
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we're in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
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

export default Slide2;
