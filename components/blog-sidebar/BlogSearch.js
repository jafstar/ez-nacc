import React from "react";

const BlogSearch = () => {
  return (
    <>
      <div className="sidebar__single sidebar__search">
        <form action="#" className="sidebar__search-form">
          <input type="search" placeholder="Search..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export { BlogSearch as default };
