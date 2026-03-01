import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

const GridList = ({ content }) => {
  return (
    <div className={styles.ezGridList}>
      {content?.list?.map((itm, idx) => {
        return (
          <div
            key={`grid-item-${idx}`}
            id={`spec-item-${idx}`}
            className={styles.gridItem}
          >
            <a href={"/"} className={styles.gridLink}>
              {/* {itm.icon && (
                  <div className={styles.gridIcon}>
                    <Image
                      src={itm.icon}
                      width={64}
                      height={64}
                      alt={`icon ${
                        itm.icon && itm.icon.split("/")[3].split(".")[0]
                      }`}
                    />
                  </div>
                )} */}

              <div className={styles.gridTitle}>{itm.title}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export { GridList as default };
