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
                      </div>
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

export { BlogSectionThree as default };
