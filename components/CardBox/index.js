import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

const CardBox = ({ content }) => {
  return (
    <div className={`${styles.cardBox} flex`}>
      <div className={styles.cardBoxImg}>
        <Image
          src={content.image_src}
          width={content.image_width}
          height={content.image_height}
          alt={content.image_alt}
        />
      </div>

      <div className={styles.cardBoxMsg}>
        <h3>{content.title}</h3>
        <p>{content.body}</p>
        <Link href={content.link_url}>{content.link_text}</Link>
      </div>
    </div>
  );
};

export { CardBox as default };
