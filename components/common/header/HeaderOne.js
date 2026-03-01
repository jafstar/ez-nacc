"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
// import SearchButton from "./SearchButton";
// import iconInstagram from "../../../public/assets/images/icon/instagram.svg";
import iconInstagram from "@/public/assets/images/social/instagram.svg";
import iconFacebook from "@/public/assets/images/social/facebook.svg";
import iconLinkedIn from "@/public/assets/images/social/linkedin.svg";
import iconXTwitter from "@/public/assets/images/social/xtwitter.svg";
import iconYoutube from "@/public/assets/images/social/youtube.svg";
import iconWhatsapp from "@/public/assets/images/social/whatsapp.svg";

const HeaderOne = (props) => {
  // Memos
  const navData = React.useMemo(() => {
    return props?.globals.filter((itm) => itm.global_title === "GlobalNav")[0]
      .global_content[0].comp_content.menuList;
  }, [props.globals]);

  const headerContent = React.useMemo(() => {
    return props?.globals.filter(
      (itm) => itm.global_title === "GlobalHeaderV1"
    )[0].global_content[0].comp_content;
  }, [props.globals]);

  // Effects
  // React.useEffect(() => {
  //   console.log("props: ", props);
  // }, []);

  // React.useEffect(()=> {
  //   console.log("headerContent: ", headerContent);
  // }, [headerContent])

  // React.useEffect(()=> {
  //   console.log("navData: ", navData);
  // }, [navData])

  return (
    <>
      <header className="main-header clearfix">
        <div className="main-header__top clearfix">
          <div className="container clearfix">
            <div className="main-header__top-inner clearfix">
              <div className="main-header__top-left">
                <ul className="list-unstyled main-header__top-address">
                  <li>
                    <div className="icon">
                      <span className="icon-call"></span>
                    </div>
                    <div className="text">
                      <p>
                        <a href="tel:5204654544">{headerContent?.phone}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-envelope"></span>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:demo@example.com">
                          {headerContent?.email}
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-place"></span>
                    </div>
                    <div className="text">
                      <p>{headerContent?.location}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="main-header__top-right">
                <ul className="list-unstyled main-header__top-right-content">
                  <li>
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/NACCMalawi/`}
                    >
                      <span className="custom-icon">
                        <img src={iconFacebook.src} alt="facebook icon" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={`https://www.linkedin.com/company/namwera-aids-coordinating-committee-nacc/`}
                    >
                      <span className="custom-icon">
                        <img src={iconLinkedIn.src} alt="linkedin icon" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href={`https://www.instagram.com/naccmalawi/`}
                    >
                      <span className="custom-icon">
                        <img src={iconInstagram.src} alt="instagram icon" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={`https://x.com/NACCMalawi`}>
                      <span className="custom-icon">
                        <img src={iconXTwitter.src} alt="x/twitter icon" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href={`https://www.youtube.com/@NACCMalawi`}
                    >
                      <span className="custom-icon">
                        <img src={iconYoutube.src} alt="youtube icon" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href={`https://whatsapp.com/channel/0029Va7syt7KWEKr2Y7Ady17`}
                    >
                      <span className="custom-icon">
                        <img src={iconWhatsapp.src} alt="whatsapp icon" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu clearfix">
          <div className="container clearfix">
            <div className="main-menu-wrapper">
              <div className="main-menu-wrapper__left">
                <div className="main-menu-wrapper__logo">
                  <Link href={`/`}>
                    <img src={"/assets/images/resources/logo-1.png"} alt="" />
                  </Link>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <div className="main-menu-wrapper__main-menu">
                  <MobileMenu data={navData} />
                  <Nav data={navData} />
                </div>
                <Link href={`/donate-now`} className="thm-btn main-header__btn">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export { HeaderOne as default };
