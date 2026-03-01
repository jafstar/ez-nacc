import React from "react";
import Link from "next/link";

const FeatureOne = ({ content }) => {
  return (
    <>
      <section className="feature-one">
        <div className="container">
          <div className="row">
            {content?.list?.map((itm, idx) => {
              return (
                <div
                  key={`feature-item-${idx}`}
                  className="col-xl-4 col-lg-4 wow fadeInLeft"
                  data-wow-delay={`${100 * (idx + 1)}ms`}
                >
                  <div className="feature-one__single">
                    <div className="feature-one__top">
                      <div className="feature-one__icon">
                        <span className={itm.icon ?? "icon-donation-1"}></span>
                      </div>
                      <h3 className="feature-one__title">
                        <Link href={`#`}>{itm.title}</Link>
                      </h3>
                    </div>
                    <p className="feature-one__text">{itm.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { FeatureOne as default };
