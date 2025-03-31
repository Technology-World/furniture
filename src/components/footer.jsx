import dark from "../assets/images/about-dark.jpg";
import light from "../assets/images/about-light.jpg";
function Footer() {
  return (
    <footer className="w-full lg:w-[1440px] mx-auto bg-white relative text-md">
      <div className="w-full flex flex-col static bottom-10 z-10">
        <div className="w-full flex flex-col md:flex-row ">
          <div>
            <img
              src={dark}
              alt="Page 1"
              className=" w-full h-[250px] object-cover"
            />
          </div>
          <div className="flex flex-col w-full md:w-[550px] px-3 md:mx-auto py-5 justify-center">
            <h2 className="tracking-[5px] font-bold mb-2 uppercase ">
              About our furniture
            </h2>
            <p>
              Our multifunctional collection blends design and function to suit your
              individual taste. Make each room unique, or pick a cohesive theme that
              best express your interests and what inspires you. Find the furniture
              pieces you need, from traditional to contemporary styles or anything
              in between. Product specialists are available to help you create your
              dream space.
            </p>
          </div>
          <div>
            <img
              src={light}
              alt="Page 2"
              className=" w-full h-[250px] object-cover"
            />
          </div>
        </div>

        <div className="bg-[#010031] p-5 text-white">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} | All right reserved | Adeosun Sodeeq Olalekan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
