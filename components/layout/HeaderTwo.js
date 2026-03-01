"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
// import MobileMenu from "./MobileMenu";

export default class HeaderTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log("props: ", this.props);
  // }

  render() {
    // console.log("props: ", this.props);
    let publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + "/";
    return (
      <>
        <header className="main-header main-header-two clearfix">
          <nav className="main-menu main-menu-two clearfix">
            <div className="container clearfix">
              <div className="main-menu-wrapper clearfix">
                <div className="main-menu-wrapper__left">
                  <div className="main-menu-wrapper__logo">
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
                      <img
                        src={publicUrl + "assets/images/resources/logo-2.png"}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-wrapper__right">
                  <div className="main-menu-wrapper__main-menu">
                    {/* <MobileMenu /> */}
                    <Nav />
                  </div>
                  <Link
                    href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/donate-now`}
                    className="thm-btn main-header__btn"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
