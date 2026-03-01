"use client"
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

/**
 * @type React.Component
 * @name Navbar
 *
 */
const Navbar = () => {
  // Hooks
  const pathname = usePathname();

  // State - Local
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Func
  const handleNavMenuBtn = () => {
    setMenuOpen(!menuOpen);
  };

  // Func
  const handleClickMenu = () => {
    setMenuOpen(false);
  };

  // Effects
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={`${styles.navBar} flex nowrap`}>
      <div className={styles.navBarInner}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <div className={styles.logoImgDiv}></div>
            <div className={styles.logoTitle}>
              <h1>
                NEEDED ACTIONS <br /> FOR COMMUNITY CARE
                <br /> AND DEVELOPMENT
              </h1>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.navMenu} ${
            menuOpen ? styles.menuOpen : styles.menuClosed
          }`}
        >
          <div
            onClick={() => handleNavMenuBtn()}
            className={`${styles.navMenuBtn}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul onClick={handleClickMenu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/collaborations">Collaborations</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={styles.navActionBtn}>
                <div>
                  <Link className="btn-lg btn-primary" href="/donate">
                    Donate
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Navbar as default };
