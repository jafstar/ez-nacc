import React from "react";
import Link from "next/link";

const Breadcrumb = ({ content }) => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: `url(${
              content.bgImg ?? "/assets/images/backgrounds/page-header-bg.jpg"
            })`,
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{content.heading ?? "Page Title"}</h2>
            <p className="thm-breadcrumb">{content.body ?? ""}</p>
            {/* <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">{currentPage}</li>
            </ul> */}
          </div>
        </div>
      </section>
    </>
  );
};

export { Breadcrumb as default };
