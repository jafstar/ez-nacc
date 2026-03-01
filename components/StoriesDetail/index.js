import React from "react";
import Link from "next/link";
import { DateTime } from "luxon";

import StoriesAuthor from "@/components/StoriesAuthor";
// import imgDemo from "@/public/assets/images/blog/blog-details-img-1.jpg";

const StoriesDetail = ({ content, globals }) => {
  //   console.log("content: ", content);
  const { created_at, content_title, content_slug, content_fields } =
    content[0];

  // console.log("globals: ", globals);

  const dateObj = DateTime.fromISO(created_at).toFormat("DD");
  const author_global = globals.filter(
    (itm) => itm.global_title === "GlobalStoriesAuthor"
  )[0].global_content[0].comp_content;

  const author_info = author_global.list.filter(
    (itm) => itm.author === content_fields.author
  );

  // console.log("content_fields: ", content_fields);

  // console.log("author global: ", author_global);
  // console.log("author_info: ", author_info);

  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3">
              <div className="sidebar">
                {/* <BlogSearch />
                                    <BlogCategory />
                                    <BlogLatestPost />
                                    <BlogQuery />
                                    <BlogTags />
                                    <BlogComments /> */}
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img src={content_fields.image ?? ""} alt="" />
                  <div className="blog-details__date">
                    <p>{dateObj}</p>
                  </div>
                </div>
                <br />
                <div className="blog-details__content">
                  {/* <ul className="blog-details__meta list-unstyled">
                    <li>
                      <Link href={`/blog-details`}>
                        <i className="far fa-comment"></i>
                        <span>(2)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/blog-details`}>
                        <i className="far fa-thumbs-up"></i>
                        <span>(2)</span>
                      </Link>
                    </li>
                  </ul> */}
                  <h3 className="blog-details__title">{content_title ?? ""}</h3>

                  <p
                    className="blog-details__text-1"
                    dangerouslySetInnerHTML={{
                      __html: String(content_fields?.intro ?? "").replaceAll(
                        "\n",
                        "<br />"
                      ),
                    }}
                  ></p>
                  <p
                    className="blog-details__text-2"
                    dangerouslySetInnerHTML={{
                      __html: String(content_fields?.body ?? "").replaceAll(
                        "\n",
                        "<br />"
                      ),
                    }}
                  ></p>
                </div>
                {/* <div className="blog-details__content-two">
                  <div className="blog-details__content-two-img">
                    <img
                      src={"@/assets/images/blog/blog-details-img-2.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="blog-details__content-two-details">
                    <h3 className="blog-details__content-two-title">
                      Donation
                    </h3>
                    <p className="blog-details__content-two-text-1">
                      Labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nexercitatiullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolreprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint{" "}
                    </p>
                    <p className="blog-details__content-two-text-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate{" "}
                    </p>
                    <ul className="list-unstyled blog-details__content-two-points">
                      <li>
                        Living so moveth won fish waters thing grass tree does
                        not fresh there.
                      </li>
                      <li>
                        Beast itself doesn't signs they are so together signs
                        for the called.
                      </li>
                      <li>
                        Male divide sixth cattle evening all shall over green
                        may seasons said.
                      </li>
                      <li>
                        Divided lights wherein wishing land bring deep
                        abundantly also may.
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <div className="blog-details__bottom">
                  <p className="blog-details__tags">
                    <span>Tags</span>
                    <a href="#">Fundraising</a>
                    <a href="#">Charity</a>
                  </p>
                  <div className="blog-details__social-list">
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
                  </div>
                </div> */}
                <br />
                <br />
                <StoriesAuthor content={{ ...author_info[0] }} />
                {/* <div className="author-one">
                  <div className="author-one__image">
                    <img src={content_fields.author_image ?? ""} alt="" />
                  </div>
                  <div className="author-one__content">
                    <h3>{content_fields.author ?? ""}</h3>
                    <p>{content_fields.author_bio ?? ""}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { StoriesDetail as default };
