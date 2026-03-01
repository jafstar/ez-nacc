import React from "react";
import Link from "next/link";

export default class ErrorContent extends React.Component {
  render() {
    let publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + "/";
    return (
      <>
        <section className="error-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="error-page__inner">
                  <div className="error-page__img zoom-fade">
                    <img
                      src={
                        publicUrl + "assets/images/shapes/error-page-shape.png"
                      }
                      alt=""
                    />
                  </div>
                  <p className="error-page__text">
                    Sorry This Page Not found take a look at our most popular
                  </p>
                  <div className="error-page__btn-box">
                    <Link
                      href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}
                      className="thm-btn error-page__btn"
                    >
                      Go To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
