import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Pagination } from "swiper/modules";
import "./PopularStoreProducts.css";

export default function PopularStoreProducts() {
  return (
    <section className="text-center mb-10 mt-20">
      <div className="my-5">
        <h1 className="text-xl font-bold">POPULAR IN OUR STORE</h1>
        <p>Pick the most popular products from us. May you love them!</p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className="popularItemCard pb-10">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popularItemCard">
            <div className="cardContent">
              <img
                src="https://i.ibb.co/Z1s271J/printed-summer-dress-1.jpg"
                alt=""
                className="cardImage"
              />
              <div className="overlay"></div>
              <div className="icons">
                <span className="icon" data-name="Quick View">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <span className="icon" data-name="Add to Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="icon" data-name="Add to Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </span>
                <span className="icon" data-name="Add to Compare">
                  <i className="fa fa-align-center"></i>
                </span>
              </div>
            </div>
            <div className="py-3">
              <h3>Lorem isum</h3>
              <p className="font-bold">$50.90</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
