import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./serviceCarousel.module.css";

import servicesimg1 from "../../assets/img/servicesimg1.png";
import servicesimg2 from "../../assets/img/servicesimg2.png";
import servicesimg3 from "../../assets/img/servicesimg3.png";
import servicesimg4 from "../../assets/img/servicesimg4.png";
import servicesimg5 from "../../assets/img/servicesimg5.png";

const services = [
  {
    image: servicesimg1,
    heading: "REAL ESTATE",
    text: "BuildIT offers comprehensive real estate solutions for homes, offices, and commercial developments. From property sales and acquisitions to investment advisory and project development, we connect clients with the right opportunities while ensuring transparency, value, and long-term returns.",
  },
  {
    image: servicesimg2,
    heading: "URBAN DEVELOPMENT",
    text: "BuildIT drives sustainable urban development by planning, designing, and executing modern communities for homes, offices, and mixed-use projects. Our focus is on creating functional, resilient, and aesthetically appealing spaces that enhance living standards while supporting long-term growth and development.",
  },
  {
    image: servicesimg3,
    heading: "MATERIAL SUPPLY & PURCHASE",
    text: "BuildIT provides reliable access to high-quality construction materials for homes, offices, and large-scale projects. We source, supply, and deliver everything from basic building essentials to premium finishes, ensuring durability, affordability, and timely availability for every stage of construction.",
  },
  {
    image: servicesimg4,
    heading: "BUILDING FINISHING",
    text: "BuildIT delivers top-quality building finishing solutions for homes, offices, and other developments. From flooring, roofing, tiling, painting, and fittings to bespoke detailing, we ensure every project is completed with precision, durability, and style.",
  },
  {
    image: servicesimg5,
    heading: "PROPERTY MANAGEMENT",
    text: "At BuildIT, we take the stress out of property ownership by offering end-to-end management for both residential and commercial spaces. From securing reliable tenants to overseeing maintenance and ensuring smooth day-to-day operations, we work to protect and grow the value of your investment over time.",
  },
  {
    image: servicesimg1,
    heading: "INTERIOR DESIGN",
    text: "BuildIT transforms spaces through thoughtful interior design and finishing solutions for homes, offices, and other structures. We blend functionality with style, handling everything from concept development to execution to create environments that reflect your vision while enhancing comfort, beauty, and long-term value.",
  },
];

const ServiceCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination, Navigation, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {services.map(({ image, heading, text }) => (
          <SwiperSlide key={heading}>
            <div className={styles.card}>
              <img src={image} alt="" className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.cardHeading}>{heading}</h3>
                <p className={styles.cardText}>{text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
