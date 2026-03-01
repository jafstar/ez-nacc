import React from "react";
import Link from "next/link";
import EZHTML from "ez-content/EZHTML";

const BlogSectionThree = ({ content }) => {
  return (
    <>
      <section className="blog-three">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              {content.tagline ?? `Our Latest News`}
            </span>
            <h2 className="section-title__title">
              {content.title ?? `What's Been Happening As of Late.`}
            </h2>
          </div>
          <div className="row">
            {content.list &&
              content.list.map((itm, idx) => {
                return (
                  <div
                    key={`blog-three-item-${idx}`}
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="blog-three__single">
                      <div className="blog-three__img">
                        <img
                          src={
                            itm.image ?? `/assets/images/blog/blog-1-${idx}.jpg`
                          }
                          alt=""
                        />
                      </div>
                      <div className="blog-three__content">
                        {/* <ul className="list-unstyled blog-three__meta">
                      <li>
                        <Link
                          href={
                            `${itm.linkURL ?? "#"}`
                          }
                        >
                          <i className="far fa-calendar"></i>{itm.date}
                        </Link>
                      </li>
                    </ul> */}
                        <h3 className="blog-three__title">
                          <Link href={`${itm.linkURL ?? "#"}`}>
                            {itm.linkTitle}
                          </Link>
                        </h3>

                        <p>
                          <span>By</span> {itm.authorName ?? "NACC Staff"}
                        </p>
                        <br />
                        <EZHTML
                          el="p"
                          text={itm.body}
                          className="blog-one__text"
                          default=""
                        />
                        <br />

                        {itm.linkURL ? (
                          <Link href={`${itm.linkURL ?? "#"}`}>
                            &gt; Read more
                          </Link>
                        ) : null}

                        {/* <div className="blog-three__person">
                          <div className="blog-three__person-img">
                            <img
                              src={
                                itm.authorImg ??
                                "/assets/images/blog/blog-3-person-img-1.jpg"
                              }
                              alt=""
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
             
                <div className="blog-three__single">
                  <div className="blog-three__img">
                    <img
                      src={"/assets/images/blog/blog-1-1.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-three__content">
                    <ul className="list-unstyled blog-three__meta">
                      <li>
                        <Link
                          href={
                            `/blog-details`
                          }
                        >
                          <i className="far fa-calendar"></i> May 20, 2023
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-three__title">
                      <Link
                        href={
                          `/blog-details`
                        }
                      >
                        Bring to the table win-win survival
                      </Link>
                    </h3>
                    <div className="blog-three__person">
                      <div className="blog-three__person-img">
                        <img
                          src={
                            
                            "/assets/images/blog/blog-3-person-img-1.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="blog-three__person-name">
                        <p>
                          <span>By</span> Saeed Wame
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
        
                <div className="blog-three__single">
                  <div className="blog-three__img">
                    <img
                      src={ "/assets/images/blog/blog-1-2.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-three__content">
                    <ul className="list-unstyled blog-three__meta">
                      <li>
                        <Link
                          href={
                            `/blog-details`
                          }
                        >
                          <i className="far fa-calendar"></i> May 20, 2022
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-three__title">
                      <Link
                        href={
                          `/blog-details`
                        }
                      >
                        will provide an ats resume writing and Blog.
                      </Link>
                    </h3>
                    <div className="blog-three__person">
                      <div className="blog-three__person-img">
                        <img
                          src={
                           
                            "/assets/images/blog/blog-3-person-img-2.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="blog-three__person-name">
                        <p>
                          <span>By</span> Saeed Wame
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="blog-three__single">
                  <div className="blog-three__img">
                    <img
                      src={"/assets/images/blog/blog-1-3.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-three__content">
                    <ul className="list-unstyled blog-three__meta">
                      <li>
                        <Link
                          href={
                            `/blog-details`
                          }
                        >
                          <i className="far fa-calendar"></i> May 20, 2022
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-three__title">
                      <Link
                        href={
                           `/blog-details`
                        }
                      >
                        Leverage agile frameworks to provide
                      </Link>
                    </h3>
                    <div className="blog-three__person">
                      <div className="blog-three__person-img">
                        <img
                          src={
                            
                            "/assets/images/blog/blog-3-person-img-3.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="blog-three__person-name">
                        <p>
                          <span>By</span> Saeed Wame
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </section>
    </>
  );
};

export { BlogSectionThree as default };
