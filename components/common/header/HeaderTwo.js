"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

export default class HeaderTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + "/";
    const navData = this.props.globals.filter(
      (itm) => itm.global_title === "GlobalNav"
    )[0].global_content[0].comp_content.menuList;
    return (
      <>
        <header className="main-header main-header-two clearfix">
          <nav className="main-menu main-menu-two clearfix">
            <div className="container clearfix">
              <div className="main-menu-wrapper">
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
                    <MobileMenu data={navData} />
                    <Nav data={navData} />
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
