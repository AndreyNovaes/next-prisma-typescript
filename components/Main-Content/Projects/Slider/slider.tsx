
import React from 'react';
// helpers
import { useState, useEffect } from 'react';
// components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SliderCard from './sliderCard';
// styles
import { Box } from '@chakra-ui/react';
// requests
import { getProjects } from 'services/requests';
// types
import { Projects } from 'services/types/baseTypes';
// import Swiper core and required modules with css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';

export default function SliderWrapper() {
  const [projects, setProjects] = useState([]);
  const breakPoints = {
  640: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
  1800: {
    slidesPerView: 3,
  },
}

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <>
      <Box
        zIndex={{base: 0, md: 1}}
        as={Swiper}
        breakpoints={breakPoints}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {projects.map((project: Projects) => (
          <SwiperSlide key={project.id}>
            <SliderCard {...project} />
          </SwiperSlide>
        ))}
      </Box>
    </>
  );
}
