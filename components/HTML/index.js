import React from "react";

import styles from "./styles.module.css";

const HTML = ({ content }) => {
  function createMarkup() {
    return {
      __html: `${content.code}`,
    };
  }
  return (
    <div className={styles.htmlBox}>
      {content.title ? <h2>{content.title} </h2> : null}

      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export { HTML as default };
