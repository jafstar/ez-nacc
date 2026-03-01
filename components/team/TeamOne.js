import React from "react";
import Link from "next/link";

const TeamOne = ({ content }) => {
  let publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + "/";
  return (
    <>
      <section className="team-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              {content.tagline ?? "Tagline"}
            </span>
            <h2 className="section-title__title">{content.title ?? "Title"}</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              {/* Team One Single */}
              <div className="team-one__single">
                <div className="team-one__img">
                  <img
                    src={content.cardImg1 ?? "/assets/images/team/team-1-1.jpg"}
                    alt=""
                  />
                </div>
                <div className="team-one__content">
                  <h4 className="team-one__name">
                    <Link href={"#"}>{content.cardTitle1 ?? "Title"}</Link>
                  </h4>
                  <p className="team-one__title">
                    {content.cardSubtitle1 ?? "Sub Title"}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              {/* Team One Single */}
              <div className="team-one__single">
                <div className="team-one__img">
                  <img
                    src={content.cardImg2 ?? "/assets/images/team/team-1-2.jpg"}
                    alt=""
                  />
                </div>
                <div className="team-one__content">
                  <h4 className="team-one__name">
                    <Link href={"#"}>{content.cardTitle2 ?? "Title"}</Link>
                  </h4>
                  <p className="team-one__title">
                    {content.cardSubtitle2 ?? "Sub Title"}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="100ms"
            >
              {/* Team One Single */}
              <div className="team-one__single">
                <div className="team-one__img">
                  <img
                    src={content.cardImg3 ?? "/assets/images/team/team-1-3.jpg"}
                    alt=""
                  />
                </div>
                <div className="team-one__content">
                  <h4 className="team-one__name">
                    <Link href={"#"}>{content.cardTitle3 ?? "Title"}</Link>
                  </h4>
                  <p className="team-one__title">
                    {content.cardSubtitle3 ?? "Sub Title"}
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { TeamOne as default };
