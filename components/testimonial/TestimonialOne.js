import React from "react";
import Script from "next/script";
import EZHTML from "ez-content/EZHTML";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
const TestimonialOne = ({ content }) => {
  return (
    <>
      <section className="testimonial-one">
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {content.list &&
              content.list.map((itm, idx) => {
                return (
                  <SwiperSlide key={`testimonial-one-item-${idx}`}>
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__img">
                        <img
                          src={
                            itm.image ??
                            "/assets/images/testimonial/testimonial-1-1.jpg"
                          }
                          alt=""
                        />
                        <div className="testimonial-one__quote">
                          <span className="fas fa-quote-left"></span>
                        </div>
                      </div>

                      <EZHTML
                        el="p"
                        text={itm.body}
                        className="testimonial-one__text"
                        default="Lorem ipsum dolor sit amet,<br /> cibo mundi ea duo,<br /> vim exerciphaedrum."
                      />

                      <div className="testimonial-one__client-info">
                        <h4 className="testimonial-one__client-name">
                          {itm.title ?? ""}
                        </h4>
                        <span className="testimonial-one__client-title">
                          {itm.subtitle ?? ""}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export { TestimonialOne as default };
