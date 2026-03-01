import React from "react";
import Link from "next/link";
import { DateTime } from "luxon";

import BlogSearch from "@/components/blog-sidebar/BlogSearch";
import BlogCategory from "@/components/blog-sidebar/BlogCategory";

const StoriesList = ({ data }) => {
  return (
    <section className="blog-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="sidebar">
              <BlogSearch />
              <BlogCategory />
              {/* <BlogCategory />
                <BlogLatestPost />
                <BlogQuery />
                <BlogTags />
                <BlogComments /> */}
            </div>
          </div>

          <div className="col-xl-8 col-lg-7">
            <div className="blog-sidebar__left">
              <div className="blog-sidebar__content-box">
                {/* Blog Loop Start */}
                {!!data.length &&
                  data.map((itm, idx) => {
                    const dateObj = DateTime.fromISO(itm.created_at).toFormat(
                      "DD"
                    );
                    return (
                      <div
                        key={`list-item-${idx}`}
                        className="blog-sidebar__single"
                      >
                        <div className="blog-sidebar__img">
                          <img src={itm.content_fields.image} alt="" />
                          <Link href={`/stories${itm.content_slug}`}>
                            <span className="blog-one__plus"></span>
                          </Link>
                        </div>
                        <div className="blog-sidebar__content">
                          <div className="blog-sidebar__meta">
                            {/* <div className="blog-sidebar__cat">
                              <p>Corporate</p>
                            </div> */}
                            <div className="blog-sidebar__date">
                              <p>
                                {" "}
                                <span className="icon-calendar"></span>
                                {dateObj}
                              </p>
                            </div>
                          </div>
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
                        </div>
                      </div>
                    );
                  })}

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
