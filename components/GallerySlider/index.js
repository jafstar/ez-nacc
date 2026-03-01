import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import styles from "./styles.module.css";
import Image from "next/image";

const GallerySlider = ({ content }) => {
  const [startSlide, setStartSlide] = React.useState([...content.slides]);

  const handleSplide1Moved = (splide, next, prev) => {
    // console.log("newIdx: ", next)
    setStartSlide(next);
  };

  return (
    <div className={styles.gallerySliderShell}>
      <div className={styles.gallerySlider}>
        <h2>{content.title} </h2>

        <Splide
          options={{
            start: startSlide,
            type: "loop",
            drag: "free",
            perPage: 4,
            breakpoints: {
              1060: {
                perPage: 3,
              },
              740: {
                perPage: 2,
              },
              440: {
                perPage: 1,
              },
            },
          }}
          // onMoved={handleSplide1Moved}
          aria-label={content.title}
        >
          {content.slides &&
            content.slides.map((itm, idx) => {
              return (
                <SplideSlide key={`table-row-${idx}`}>
                  <div className={styles.splideType1}>
                    <Image
                      src={itm}
                      width={100}
                      height={100}
                      alt={`ally ${idx}`}
                    />
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </div>
  );
};

export { GallerySlider as default };
