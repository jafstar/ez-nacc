import React from "react";

const StoriesAuthor = ({ content }) => {
  const { author = "", author_image = "", author_bio = "" } = content;
  return (
    <div className="author-one">
      <div className="author-one__image">
        <img src={author_image ?? ""} alt="" />
      </div>
      <div className="author-one__content">
        <h3>{author ?? ""}</h3>
        <p>{author_bio ?? ""}</p>
      </div>
    </div>
  );
};

export { StoriesAuthor as default };
