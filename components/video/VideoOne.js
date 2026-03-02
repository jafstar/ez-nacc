import React from "react";
import Link from "next/link";
import Script from "next/script";

const VideoOne = ({ content }) => {
  return (
    <>
      <section className="video-one">
        <div className="video-one__content-box">
          <div className="video-one-shape sauare-mover"></div>
          <div
            className="video-one-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(/assets/images/backgrounds/video-one-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="video-one__inner">
              <div className="video-one__video-link">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  className="video-popup"
                >
                  <div className="video-one__video-icon">
                    <span className="fa fa-play"></span>
                    <i className="ripple"></i>
                  </div>
                </a>
              </div>
              <h3
                className="video-one__title"
                dangerouslySetInnerHTML={{
                  __html: String(content.title ?? "").replaceAll(
                    "\n",
                    "<br />"
                  ),
                }}
              ></h3>

              <p
                className="video-one__text"
                dangerouslySetInnerHTML={{
                  __html: String(content.body ?? "").replaceAll("\n", "<br />"),
                }}
              ></p>

              <Link
                href={`/about`}
                className="thm-btn video-one__btn video-popup"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <Script id="VideoOneMagnificPopup">
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

export { VideoOne as default };
