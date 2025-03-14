import React, { useState } from 'react';
// components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, A11y, Autoplay } from 'swiper';
import SliderCard from './sliderCard';
// styles
import { Box, Heading, Text, useColorModeValue, Flex } from '@chakra-ui/react';
// static data
import { projects } from '../../../../data/staticData';
// types
import { Project } from '../../../../services/types/baseTypes';
// import Swiper core and required modules with css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/effect-coverflow';

// Definindo um tipo para o parâmetro swiper para evitar o erro do any
interface SwiperInstance {
  realIndex: number;
}

export default function SliderWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const bgGradient = useColorModeValue(
    'linear(to-b, blue.50, white)',
    'linear(to-b, gray.900, gray.800)'
  );
  const titleColor = useColorModeValue('blue.600', 'blue.300');
  
  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.realIndex);
  };
  
  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      bgGradient={bgGradient}
      py={10}
      px={4}
      borderRadius="lg"
    >
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="xl" color={titleColor} mb={2}>
          Meus Projetos
        </Heading>
        <Text fontSize="lg" opacity={0.8} maxW="700px" mx="auto">
          {activeIndex < projects.length && (
            <Text as="span" fontWeight="medium">
              {projects[activeIndex].title}
            </Text>
          )}
        </Text>
      </Box>
      
      <Box
        position="relative"
        zIndex={{base: 0, md: 1}}
        as={Swiper}
        modules={[EffectCoverflow, Navigation, Pagination, A11y, Autoplay]}
        effect="coverflow"
        grabCursor={false} // Desativa o cursor de arrastar para evitar confusão
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        onSlideChange={handleSlideChange}
        speed={800}
        loop={true}
        style={{ 
          width: '100%', 
          height: '100%',
          padding: '30px 0',
          '--swiper-navigation-color': '#3182ce',
          '--swiper-pagination-color': '#3182ce',
        } as React.CSSProperties}
      >
        {projects.map((project: Project) => (
          <SwiperSlide 
            key={project.id} 
            style={{ 
              width: '700px', 
              maxWidth: '90%',
              display: 'flex', 
              justifyContent: 'center'
            }}
          >
            <SliderCard {...project} />
          </SwiperSlide>
        ))}
        
        {/* Custom navigation arrows */}
        <Box 
          className="swiper-button-next" 
          _after={{
            content: '\'›\'',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        />
        <Box 
          className="swiper-button-prev" 
          _after={{
            content: '\'‹\'',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        />
      </Box>
      
      {/* Project counter */}
      <Flex 
        justify="center" 
        mt={4}
        color={titleColor}
        fontSize="sm"
        fontWeight="medium"
      >
        <Text>
          {activeIndex + 1} / {projects.length}
        </Text>
      </Flex>
    </Box>
  );
}
