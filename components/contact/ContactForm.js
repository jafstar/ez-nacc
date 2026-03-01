import React from "react";
import InnerHTML from "dangerously-set-html-content";

const ContactForm = ({ content }) => {
  let publicUrl = "/";
  return (
    <>
      <section className="contact-page">
        <div className="contact-page-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    {content.tagline ?? "Tagline here"}
                  </span>
                  <h2 className="section-title__title">
                    {content.title ?? "Title here"}
                  </h2>
                </div>

                <div className="contact-page__form">
                  {content && content.htmlForm ? (
                    <InnerHTML html={content.htmlForm} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__right">
                <div className="contact-page__img">
                  <img
                    src={content.mainImg ?? "/assets/images/blog/blog-1-3.jpg"}
                    alt=""
                  />
                  <div className="contact-page__img-shape">
                    <img
                      src={"/assets/images/shapes/contact-page-img-shape.png"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ContactForm as default };
