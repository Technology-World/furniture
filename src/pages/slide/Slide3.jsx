import hero3 from "../../assets/images/hero3.jpg";
import Nav from "../../components/nav";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";
const Slide3 = () => {
  return (
    <div className="w-full lg:w-[1440px] mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div className=" w-full">
          <nav className="w-full bg-[#010031] p-2 md:bg-transparent fixed md:absolute top-0 left-0 md:left-10 md:top-10">
            <Nav />
          </nav>
          <img
            src={hero3}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 my-15">
          <div className="w-full flex flex-col gap-10 px-2 md:mx-auto md:w-[450px] ">
            <h2 className="font-bold text-4xl">
              Manufactured with the best materials
            </h2>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
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
};

export default Slide3;
