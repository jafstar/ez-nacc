import React from "react";
import Link from "next/link";

export default class TwoSectionTwo extends React.Component {
  render() {
    let publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + "/";
    return (
      <>
        <section className="two-section">
          <div className="two-section__wrapper">
            <div
              className="two-section__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
              style={{
                backgroundImage:
                  "url(" +
                  publicUrl +
                  "assets/images/backgrounds/two-section-left-bg.jpg)",
              }}
            >
              <div className="two-section__content-box">
                <p className="two-section__sub-title">Become a Volunteer</p>
                <h3 className="two-section__title">Ecological Materials</h3>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/donate-now`}
                  className="thm-btn two-section__btn-1"
                >
                  View All
                </Link>
              </div>
            </div>
            <div
              className="two-section__right wow slideInRight"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
              style={{
                backgroundImage:
                  "url(" +
                  publicUrl +
                  "assets/images/backgrounds/two-section-right-bg.jpg)",
              }}
            >
              <div className="two-section__content-box">
                <p className="two-section__sub-title">
                  Let´s join our donation program
                </p>
                <h3 className="two-section__title">Raise Funds for People</h3>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/donate-now`}
                  className="thm-btn two-section__btn-2"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
