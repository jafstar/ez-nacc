import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroV2 = ({ content }) => {
  return (
    <>
      <section className="main-slider main-slider-two">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          // loopAddBlankSlides={true}
          // slidesPerView={1}
          // effect="fade"
          // autoplay={{ delay: 5000 }}
          modules={[EffectFade, Pagination, Navigation]}
          pagination={{
            el: "#main-slider-pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-container thm-swiper__slider"
        >
          {content?.list?.map((itm, idx) => {
            return (
              <SwiperSlide key={`slide-item-${idx}`} className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${
                      itm.background ??
                      "/assets/images/backgrounds/main-slider-1-1.jpg"
                    })`,
                  }}
                ></div>
                <div className="main-slider-two__map">
                  {/* <img
                    src={"/assets/images/shapes/main-slider-two-map-1.png"}
                    alt=""
                  /> */}
                </div>
                <div className="main-slider-two__img">
                  <img
                    src={
                      itm.slide ??
                      "assets/images/resources/main-slider-img-1.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7">
                      <div className="main-slider__content">
                        <h2
                          className="title"
                          dangerouslySetInnerHTML={{
                            __html: String(itm.title ?? "").replaceAll(
                              "\n",
                              "<br />"
                            ),
                          }}
                        ></h2>

                        <p
                          dangerouslySetInnerHTML={{
                            __html: String(itm.body ?? "").replaceAll(
                              "\n",
                              "<br />"
                            ),
                          }}
                        ></p>
                        <Link
                          href={itm.link ?? "#"}
                          className="thm-btn main-slider__btn"
                        >
                          {itm.link_text ?? "Learn more"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-pagination" id="main-slider-pagination"></div>
          <div className="main-slider__nav-two">
            <div className="swiper-button-prev">
              <i className="fa fa-long-arrow-alt-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="fa fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export { HeroV2 as default };
