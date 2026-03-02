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
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
