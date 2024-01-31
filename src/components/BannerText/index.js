import React from "react";

import styles from "./styles.module.css";

const BannerText = ({ content }) => {
  return (
    <div className={styles.bannerText}>
      <h2>{content.text} </h2>
    </div>
  );
};

export { BannerText as default };
