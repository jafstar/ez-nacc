import React from "react";
import Script from "next/script";

const AboutOne = ({ content }) => {
  return (
    <>
      <section className="about-one about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-one__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <img
                      src={`${
                        content.img1 ??
                        "/assets/images/resources/about-one-img-1.jpg"
                      }`}
                      alt=""
                    />
                  </div>
                  <div
                    className="about-one__small-img wow zoomIn animated animated"
                    data-wow-delay="500ms"
                    data-wow-duration="2500ms"
                  >
                    <img
                      src={`${
                        content.img2 ??
                        "/assets/images/resources/about-one-small-img.jpg"
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="about-one__right-content">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      {content.title ?? "About Us"}
                    </span>
                    <h2 className="section-title__title">
                      {content.header ??
                        "US AID International Development Documentary"}
                    </h2>
                  </div>
                  <p className="about-one__text">
                    {content.body ??
                      `Lorem ipsum is simply free text dolor sit amet,
                    consecteturadipisicing elit sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua lonm andhn.`}
                  </p>
                  <ul className="list-unstyled about-one__points">
                    <li>
                      <div className="icon">
                        <span className="icon-comment"></span>
                      </div>
                      <div className="text">
                        <h4>
                          {content.articleTitle1 ??
                            "It service for business network."}
                        </h4>
                        <p>
                          {content.articleBody1 ??
                            `Lorem ipsum is simply free text dolor sit amet,
                            consecteturadipisicing elit sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua lonm andhn.`}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-comment"></span>
                      </div>
                      <div className="text">
                        <h4>
                          {content.articleTitle2 ??
                            "Business success rate solving."}
                        </h4>
                        <p>
                          {content.articleBody2 ??
                            `Lorem ipsum is simply free text dolor sit amet,
                            consecteturadipisicing elit sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua lonm andhn.`}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="about-one__bottom-video-box">
                    <div className="about-one__btn-box">
                      <a
                        href={content.btnLink ?? "#"}
                        className="thm-btn about-one__btn"
                      >
                        {content.btnText ?? "About More"}
                      </a>
                    </div>
                    <div className="about-one__video-link">
                      <a
                        href="https://www.youtube.com/watch?v=H9O662FPJaI"
                        className="video-popup"
                      >
                        <div className="about-one__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Script id="magnificPopup">
          {`
        if (typeof $ !== 'undefined' && $(".video-popup").length) {
          $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
          });
        }
        `}
        </Script>
      </section>
    </>
  );
};

export { AboutOne as default };
