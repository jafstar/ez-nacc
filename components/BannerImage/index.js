import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

const BannerImage = ({ content }) => {
  return (
    <div className={styles.bannerText}>
      <h2>{content.text} </h2>
    </div>
  );
};

export { BannerImage as default };
