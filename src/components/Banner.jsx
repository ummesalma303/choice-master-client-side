// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, autoplay } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../assets/banner/banner-1.webp'
import banner2 from '../assets/banner/banner-2.jpg'
import banner3 from '../assets/banner/banner-3.jpg'
import banner4 from '../assets/banner/banner-5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from './Slider';

const Banner = () => {
    return (
        <div>
           <Swiper   spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
         <Slider banner={banner}></Slider>
        </SwiperSlide>
        <SwiperSlide>
         <Slider banner={banner2}></Slider>
        </SwiperSlide>
        <SwiperSlide>
         <Slider banner={banner3}></Slider>
        </SwiperSlide>
        <SwiperSlide>
         <Slider banner={banner4}></Slider>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Banner;