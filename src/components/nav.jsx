import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="bg-transparent">
      <div className="w-full flex gap-3 md:gap-7 text-white items-center">
        <h1 className="text-xl lg:mr-5">TechWorld</h1>
        <Link to="/" className=" hover:border-b">
          home
        </Link>
        <Link to="/shop" className=" hover:border-b">
          shop
        </Link>
        <Link to="/about" className=" hover:border-b">
          about
        </Link>
        <Link to="/contact" className=" hover:border-b">
          contact
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
