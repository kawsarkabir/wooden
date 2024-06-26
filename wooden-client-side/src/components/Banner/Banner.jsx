import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative max-w-screen-xl mx-auto"
      >
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              src="https://i.ibb.co/JHmBbdK/slideshow1.jpg"
              alt=""
              className="w-full h-[86vh]"
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col  items-center justify-center z-10 text-center space-y-7 p-3">
              <div>
                <h1 className="uppercase lg:text-6xl text-3xl text-black font-semibold">
                  Decor for living room
                </h1>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="show-now bg-[#333] lg:py-3 py-2 lg:px-8 px-4 rounded text-white">
                  SHOW NOW
                </button>
                <button className="learn-more  bg-[#33c9db] lg:py-3 py-2 lg:px-8 px-4 rounded text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              src="https://i.ibb.co/JHmBbdK/slideshow1.jpg"
              alt=""
              className="w-full h-[86vh]"
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col  items-center justify-center z-10 text-center space-y-7 p-3">
              <div>
                <h1 className="uppercase lg:text-6xl text-3xl text-black font-semibold">
                  Decor for living room
                </h1>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="show-now bg-[#333] lg:py-3 py-2 lg:px-8 px-4 rounded text-white">
                  SHOW NOW
                </button>
                <button className="learn-more  bg-[#33c9db] lg:py-3 py-2 lg:px-8 px-4 rounded text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              src="https://i.ibb.co/JHmBbdK/slideshow1.jpg"
              alt=""
              className="w-full h-[86vh]"
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col  items-center justify-center z-10 text-center space-y-7 p-3">
              <div>
                <h1 className="uppercase lg:text-6xl text-3xl text-black font-semibold">
                  Decor for living room
                </h1>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="show-now bg-[#333] lg:py-3 py-2 lg:px-8 px-4 rounded text-white">
                  SHOW NOW
                </button>
                <button className="learn-more  bg-[#33c9db] lg:py-3 py-2 lg:px-8 px-4 rounded text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
