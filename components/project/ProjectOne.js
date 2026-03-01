import React from "react";
import Link from "next/link";

const ProjectOne = ({ content }) => {
  return (
    <>
      <section className="project-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              {content.tagline ?? "Our Latest Pics"}
            </span>
            <h2
              className="section-title__title"
              dangerouslySetInnerHTML={{
                __html: String(
                  content.title ?? "We Popular To Provide <br /> Best Projects."
                ).replaceAll("\n", "<br />"),
              }}
            ></h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="100ms"
            >
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={"assets/images/project/project-1-1.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title"></p>
                    <h3 className="project-one__title">
                      <Link
                        href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}
                      ></Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={"assets/images/project/project-1-2.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title"></p>
                    <h3 className="project-one__title">
                      <Link
                        href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}
                      ></Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={"assets/images/project/project-1-3.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title"></p>
                    <h3 className="project-one__title">
                      <Link
                        href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}
                      ></Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={"assets/images/project/project-1-4.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title"></p>
                    <h3 className="project-one__title">
                      <Link
                        href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}
                      ></Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={"assets/images/project/project-1-5.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title"></p>
                    <h3 className="project-one__title">
                      <Link
                        href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}
                      ></Link>
                    </h3>
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

export { ProjectOne as default };
