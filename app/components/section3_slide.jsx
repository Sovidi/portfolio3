// 모듈
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// 컴포넌트
import useMatchMedia from '@/components/useMatchMedia.jsx';

// 스와이퍼 모듈
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Section3_slide = ({ data = [] }) => {
  const mobile = useMatchMedia(`(max-width:1300px)`);
  const swiperRef = useRef(null);

  useEffect(() => {
    console.log(typeof data);
    swiperRef.current?.slideTo(0);
  }, [data]);

  return (
    <Swiper
      data-main-swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`w-full`}
      navigation={true}
      speed={1300}
      // loop={true}
      // scrollbar={{ draggable: true }}
      // loopAdditionalSlides={10}
      // scrollbar={{ draggable: true }}
      // pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        640: {
          // slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          // slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          // slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {data?.map((obj, key) => (
        <SwiperSlide
          style={{
            backgroundImage: ` ${mobile ? `url(${obj})` : `url(${obj})`} `,
          }}
          className={`lg:pt-200 flex aspect-[16/9] !h-[400px] !w-full flex-col items-center justify-start !bg-contain bg-center bg-no-repeat max-lg:h-[calc(100%-36px)] max-lg:justify-end`}
          key={key}
        >
          {/* <div className={`w-full max-w-1560 px-16 max-lg:mb-40 max-lg:pl-24`}>
            <div className={`flex flex-col items-start justify-start lg:mb-200`}>
              <span className={`text-bold78 max-lg:text-bold32 mb-12 text-white-solid max-lg:mb-8`}>
                {obj?.title}
                <br />
                {obj?.depthTitle !== "" ? obj?.depthTitle : ""}
              </span>
              <span className={`text-regular32 max-lg:text-regular16 text-grey-50`}>{obj?.subTitle}</span>
            </div>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
