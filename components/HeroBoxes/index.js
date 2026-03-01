import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

/**
 * @type React.Component
 * @name HeroBoxes
 * @param {
 *    String title,
 *    String subtitle,
 *    String box1_title,
 *    String box1_body,
 *    String box2_title,
 *    String box2_body,
 *    String box3_title,
 *    String box3_body,
 * } content
 *
 */
const HeroBoxes = ({ content }) => {
  return (
    <div className={styles.ezHeroBoxShell}>
      <div className={styles.ezHeroBox}>
        <div className={styles.heroBoxTitle}>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        <div className={styles.heroBoxItemContainer}>
          <div className={`${styles.heroBoxItem} ${styles.boxNum1}`}>
            <h3>{content.box1.title}</h3>
            <p>{content.box1.body}</p>
            <Link className="btn-md btn-primary" href={content.box1.link}>
              {content.box1.title.split(" ")[0]}!
            </Link>
          </div>
          <div className={`${styles.heroBoxItem} ${styles.boxNum2}`}>
            <h3>{content.box2.title}</h3>
            <p>{content.box2.body}</p>
            <Link className="btn-md btn-primary" href={content.box2.link}>
              {content.box2.title.split(" ")[0]}!
            </Link>
          </div>
          <div className={`${styles.heroBoxItem} ${styles.boxNum3}`}>
            <h3>{content.box3.title}</h3>
            <p>{content.box3.body}</p>
            <Link className="btn-md btn-primary" href={content.box3.link}>
              {content.box3.title.split(" ")[0]}!
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.ezHeroBoxBG}>
        <div className={styles.ezHeroBoxBG_1}></div>
        <div className={styles.ezHeroBoxBG_2}></div>
        <div className={styles.ezHeroBoxBG_3}></div>
        <div className={styles.ezHeroBoxBG_4}></div>
      </div>
    </div>
  );
};

export { HeroBoxes as default };
