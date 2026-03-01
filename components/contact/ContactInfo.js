import React from "react";

const ContactInfo = ({ content }) => {
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              {/* Contact Info Single */}
              <div className="contact-info__single">
                <h4 className="contact-info__title">Locate Us</h4>

                <p
                  className="contact-info__text"
                  dangerouslySetInnerHTML={{
                    __html: String(content.aboutText ?? ``).replaceAll(
                      "\n",
                      "<br />"
                    ),
                  }}
                ></p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              {/* Contact Info Single */}
              <div className="contact-info__single">
                <h4 className="contact-info__title">Address</h4>
                <p
                  className="contact-info__text"
                  dangerouslySetInnerHTML={{
                    __html: String(content.addressText ?? ``).replaceAll(
                      "\n",
                      "<br />"
                    ),
                  }}
                ></p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              {/* Contact Info Single */}
              <div className="contact-info__single contact-info__single-3">
                <h4 className="contact-info__title">Contact</h4>
                <p
                  className="contact-info__text"
                  dangerouslySetInnerHTML={{
                    __html: String(content.contactText ?? ``).replaceAll(
                      "\n",
                      "<br />"
                    ),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ContactInfo as default };
