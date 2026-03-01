"use client";
import React from "react";
import Script from "next/script";
// import $ from "jquery";
const CounterOne = ({ content }) => {
  return (
    <>
      <section className="counter-one">
   
        <div className="container">
        <div
          className="counter-one-bg"
          // data-jarallax
          // data-speed="0.2"
          // data-imgposition="50% 0%"
          style={{
            backgroundImage: `url(${
              content.bgImg ?? "/assets/images/backgrounds/counter-one-bg.jpg"
            })`,
          }}
        ></div>
          <div className="section-title text-center">
            <span className="section-title__tagline">
              {content.tagline ?? "Tagline"}
            </span>

            <h2
              className="section-title__title"
              dangerouslySetInnerHTML={{
                __html: String(
                  content.header ?? "Header <br /> Text"
                ).replaceAll("\n", "<br />"),
              }}
            ></h2>
          </div>
          <div className="row">
            {content?.list?.map((itm, idx) => {
              const listLength = content.list.length;
              if (idx > 4) {
                return;
              }
              return (
                <div
                  key={`counter-item-${idx}`}
                  className={`col-xl-${12 / listLength} col-lg-${
                    12 / listLength
                  } col-md-${12 / listLength} wow fadeInLeft`}
                  data-wow-delay={`${(idx + 1) * 100}ms`}
                >
                  <div className="counter-one__single">
                    <div className="counter-one__content">
                      <h3
                        className="odometer"
                        data-count={itm.countNum ?? "123"}
                      >
                        00
                      </h3>
                      <span className="counter-one__letter">
                        {itm.countSymbol ?? "+"}
                      </span>
                      <p className="counter-one__text">
                        {itm.countTitle ?? "Count Title"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="counter-one__btn-box text-center">
                <a
                  href={content.linkURL ?? "#"}
                  className="thm-btn counter-one__btn"
                >
                  {content.linkText ?? "Link Text"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <Script id={`CounterOne-${Date.now()}`}>
          {`
if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
}
      `}
        </Script>
      </section>
    </>
  );
};

export { CounterOne as default };
