import React from "react";

const TeamDetails = ({ content }) => {
  console.log("content: ", content);

  const fieldPosition = content[0]?.content_fields?.position ?? "";
  const fieldName = content[0]?.content_fields?.name ?? "";
  const fieldIntro = content[0]?.content_fields?.intro ?? "";
  const fieldBio = content[0]?.content_fields?.bio ?? "";
  const fieldImage = content[0]?.content_fields?.image ?? "";

  return (
    <>
      {/* Team Details Start */}
      <section className="team-details">
        <div className="container">
          <div className="team-details__inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    <img src={fieldImage} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <p className="team-details__top-title">{fieldPosition}</p>
                    <h3 className="team-details__top-name">{fieldName}</h3>
                    {/* <div className="team-details__social">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div> */}
                    <p className="team-details__top-text-1">{fieldIntro}</p>
                    <p className="team-details__top-text-2">{fieldBio}</p>
                    {/* <p className="team-details__top-text-3">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn&apos;t anything simply free text
                      embarrassing hidden in the middle of text.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
      {/* Team Details End */}
    </>
  );
};

export { TeamDetails as default };
