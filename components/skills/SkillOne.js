import React from "react";
import Link from "next/link";
import Script from "next/script";

const SkillsOne = ({ content }) => {
  return (
    <>
      <section className="skill-one">
        <div className="skill-one__container">
          <div className="skill-one__left">
            <div
              className="skill-one__bg"
              style={{
                backgroundImage:
                  `url(${content.bgImg})` ??
                  "url(/assets/images/backgrounds/skill-one-left-bg.jpg)",
              }}
            ></div>
            <div className="skill-one__arrow-box">
              <div className="skill-one__arrow-box-inner"></div>
            </div>
          </div>
          <div className="skill-one__right">
            <div
              className="skill-one__bg-two"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/skill-one-right-bg.jpg)",
              }}
            ></div>
            <div className="skill-one__content">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  {content.tagline ?? "Example tagline"}
                </span>
                <h2 className="section-title__title">
                  {content.title ?? "Example Title Here"}
                </h2>
              </div>

              <p
                className="skill-one__text"
                dangerouslySetInnerHTML={{
                  __html: String(content.body ?? "").replaceAll("\n", "<br />"),
                }}
              ></p>

              <Link
                href={`${content.btnLink ?? "#"}`}
                className="thm-btn skill-one__btn"
              >
                {content.btnText ?? "Read more"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { SkillsOne as default };
