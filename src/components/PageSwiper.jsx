import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slide1 from "../pages/slide/Slide1";
import Slide2 from "../pages/slide/Slide2";
import Slide3 from "../pages/slide/Slide3";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Footer from "./footer";

const pages = [];
const PageSwiper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const swiperRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Store active index for navigation

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500); // ✅ Consider screens < 1024px as "small"
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const index = pages.indexOf(location.pathname);
      swiperRef.current.slideTo(index, 0); // Jump to correct page
    }
  }, [location.pathname]);

  // Navigate when Swiper slide changes
  useEffect(() => {
    if (activeIndex !== null) {
      navigate(pages[activeIndex]);
    }
  }, [activeIndex, navigate]);

  return (
    <div className="w-full lg:w-[1440px] mx-auto bg-white">
      <div className="relative">
      {isSmallScreen ? (
        // ✅ Static layout for small screens
        <div className="grid grid-cols-1 gap-6 mt-6">
          <Slide1 />
        </div>
      ) : (
        // ✅ Swiper for large screens
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1} // ✅ Show only one slide at a time
          loop={true} // Enable infinite looping
          className="h-full lg:h-[455px]"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 gap-6">
              <Slide1 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 gap-6">
              <Slide2 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 gap-6">
              <Slide3 />
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      {/* Navigation Buttons (only for large screens) */}
      {!isSmallScreen && (
        <div className="flex items-center absolute bottom-106 lg:bottom-0 lg:right-152 z-10">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="bg-black text-white p-4 rounded-full hover:bg-neutral-800 transition cursor-pointer"
          >
            <HiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="bg-black text-white p-4 rounded-full hover:bg-neutral-800 transition cursor-pointer"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>
      )} </div>

      <Footer />
    </div>
  );
};

export default PageSwiper;
