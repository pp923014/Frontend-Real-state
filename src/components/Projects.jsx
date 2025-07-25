import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectsData } from "../assets/assets"; // Adjust path

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProjectCarousel = () => {
  return (
    <motion.div
      className="my-12 px-4 md:px-10"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="Projects"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Properties
      </motion.h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
                <p className="text-indigo-600 font-bold mt-2">{project.price}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProjectCarousel;
