import React from "react";
import Link from "next/link";

const Nav = ({ data }) => {
  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          {data &&
            data.map((itm, idx) => {
              return (
                <li key={`nav-item-${idx}`}>
                  <Link href={`${itm.url}`}>{itm.name}</Link>
                </li>
              );
            })}
          {/*           
          <li className="dropdown current">
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}>Home</Link>
            <ul>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
                  Home One
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/home-two`}>
                  Home Two
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/home-three`}>
                  Home Three
                </Link>
              </li>
              <li className="dropdown">
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
                  Header Styles
                </Link>
                <ul>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
                      Header One
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/home-two`}
                    >
                      Header Two
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/home-three`}
                    >
                      Header Three
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/about`}>
              About
            </Link>
          </li>
          <li className="dropdown">
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}>Pages</Link>
            <ul>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/team`}>
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/team-details`}
                >
                  Team Details
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/projects`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/project-details`}
                >
                  Project Details
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/testimonials`}
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/gallery`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/error`}>
                  404 Error
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}>
              Donation
            </Link>
            <ul>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/donation`}>
                  Donation
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/donation-list`}
                >
                  Donation List
                </Link>
              </li>
              <li>
                <Link
                  href={
                    process.env.NEXT_PUBLIC_PUBLIC_URL + `/donation-details`
                  }
                >
                  Donation Details
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/donate-now`}>
                  Donate Now
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/events`}>
              Events
            </Link>
          </li>
          <li className="dropdown">
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `#`}>Blog</Link>
            <ul>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/blog-v-1`}>
                  Blog V-1
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/blog-v-2`}>
                  Blog V-2
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/blog-sidebar`}
                >
                  Blog Sidebar
                </Link>
              </li>
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/blog-details`}
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/contact`}>
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
