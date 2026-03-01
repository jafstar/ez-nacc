import React from "react";

import styles from "./styles.module.css";

const HeroMessage = ({ content }) => {
  return (
    <div className={styles.ezHeroMessageShell}>
      <div className={styles.ezHeroMessage}>
        <h2>{content.message && content.message}</h2>
      </div>
    </div>
  );
};

export { HeroMessage as default };
