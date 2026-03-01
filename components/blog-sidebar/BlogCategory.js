import React from "react";
import Link from "next/link";

const BlogCategory = () => {
  return (
    <>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list list-unstyled">
          <li className="active">
            <Link href={`#view-all`}>
              View All
              {/* <span>(12)</span> */}
            </Link>
          </li>
          <li>
            <Link href={`/#/category/community`}>Community</Link>
          </li>
          <li>
            <Link href={`/#/category/health`}>Health</Link>
          </li>
          <li>
            <Link href={`/#/category/education`}>Education</Link>
          </li>
          <li>
            <Link href={`/#/category/envrionment`}>Environment</Link>
          </li>
          <li>
            <Link href={`/#/category/economics`}>Economics</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export { BlogCategory as default };
