import React from "react";
import Link from "next/link";

const StoriesList = ({ data }) => {
  return (
    <section className="blog-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-sidebar__left">
              <div className="blog-sidebar__content-box">
                {/* Blog Loop Start */}
                <div className="row">
                  {!!data.length &&
                    data.map((itm, idx) => {
                      return (
                        <div
                          key={`list-item-${idx}`}
                          className="col-md-6 col-12 my-3"
                        >
                          <div className="blog-sidebar__single">
                            <div className="blog-sidebar__content">
                              <h3 className="blog-sidebar__title">
                                <Link href={`/stories${itm.content_slug}`}>
                                  {itm.content_fields.title}
                                </Link>
                              </h3>

                              <p
                                className="blog-sidebar__text"
                                dangerouslySetInnerHTML={{
                                  __html: String(
                                    itm.content_fields?.intro ?? ""
                                  ).replaceAll("\n", "<br />"),
                                }}
                              ></p>
                              <div className="text-end mt-3">
                                <Link
                                  href={`/stories${itm.content_slug}`}
                                  className="text-decoration-underline"
                                >
                                  {"> Read more..."}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* PAGINATION */}
                {/* <div className="blog-page__pagination">
                  <ul className="pg-pagination list-unstyled">
                    <li className="count">
                      <a href="#">1</a>
                    </li>
                    <li className="count">
                      <a href="#">2</a>
                    </li>
                    <li className="count">
                      <a href="#">3</a>
                    </li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StoriesList as default };
