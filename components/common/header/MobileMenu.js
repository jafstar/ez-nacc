"use client";
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";
import Link from "next/link";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background: #ff6f0f;
    color: #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #fff;
  font-weight: 400;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  &:hover,
  &:active {
    background: #ff6f0f;
    cursor: pointer;
    color: #fff;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        href={process.env.NEXT_PUBLIC_PUBLIC_URL + `${item.url}`}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((data, index) => (
          <DropdownLink
            href={process.env.NEXT_PUBLIC_PUBLIC_URL + `${data.url}`}
            key={index}
          >
            {item.icon}
            <SidebarLabel>{data.name}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

const NavIcon = styled(Link)`
  color: #ff6f0f;
  font-size: 2rem;
  height: 50px;

  align-items: center;
  margin-left: 20px;
`;

const SidebarNav = styled.nav`
  background-color: #001d23;
  width: 47vw;
  min-width: 300px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 99999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MobileMenu = ({ data }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let publicUrl = "/";

  return (
    <>
      <>
        <NavIcon className="mobile-nav__button" href="#">
          <AiOutlineBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav className="mobile-nav__sidebar" sidebar={sidebar}>
          <SidebarWrap>
            <div className="mobile-nav__content">
              <NavIcon className="mobile-close-btn" href="#">
                <AiIcons.AiOutlineClose
                  style={{
                    color: "white",
                    fontSize: "18px",
                    justifyContent: "flex-start",
                  }}
                  onClick={showSidebar}
                />
              </NavIcon>
              <div className="logo-box">
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}
                  aria-label="logo image"
                >
                  <img
                    src={publicUrl + "assets/images/resources/logo-2.png"}
                    width="120"
                    alt="NACC LOGO"
                  />
                </Link>
              </div>
              <div className="mobile-nav-links">
                {data &&
                  data.map((item, index) => (
                    <SubMenu item={item} key={index} />
                  ))}
              </div>
            </div>
            <div className="mobile-donate-shell">
              <Link href={`/donate-now`} className="thm-btn mobile-header__btn">
                Donate Now
              </Link>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </>
    </>
  );
};

export default MobileMenu;
