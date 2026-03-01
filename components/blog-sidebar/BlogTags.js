import React from "react";
import Link from "next/link";

export default class BlogTags extends React.Component {
  render() {
    return (
      <>
        <div className="sidebar__single sidebar__tags">
          <h3 className="sidebar__title">Tags</h3>
          <div className="sidebar__tags-list">
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
              Fundraising
            </Link>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>Charity</Link>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>Water</Link>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
              Donation
            </Link>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + `/`}>
              Education
            </Link>
          </div>
        </div>
      </>
    );
  }
}
