import { Box } from '@chakra-ui/react';

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Slide } from './Slide';

export default function ContinentSwiper() {
  return (
    <Box w="full" h="450px">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <Slide
            title="Europa"
            subtitle="O continente mais antigo."
            imageUrl="/images/home/europe.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="América"
            subtitle=""
            imageUrl="/images/home/america.jpg"
            shouldTint
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="Ásia"
            subtitle=""
            imageUrl="/images/home/asia.jpg"
            shouldTint
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="Oceania"
            subtitle=""
            imageUrl="/images/home/oceania.jpg"
            shouldTint
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="África"
            subtitle=""
            imageUrl="/images/home/africa.jpg"
            shouldTint
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
