import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const SocialLinks = ({ content }) => {
  return (
    <div className={styles.socialLinksShell}>
      <div className={`${styles.socialLinks} flex-row`}>
        {content.facebook && (
          <Link href={content.facebook} target="_blank">
            <Image
              src="/images/social-fb.png"
              width={100}
              height={100}
              alt="Facebook"
            />
          </Link>
        )}

        {content.instagram && (
          <Link href={content.instagram} target="_blank">
            <Image
              src="/images/social-insta.png"
              width={100}
              height={100}
              alt="Instagram"
            />
          </Link>
        )}

        {content.linkedin && (
          <Link href={content.linkedin} target="_blank">
            <Image
              src="/images/social-linkedin.png"
              width={100}
              height={100}
              alt="LinkedIn"
            />
          </Link>
        )}

        {content.youtube && (
          <Link href={content.youtube} target="_blank">
            <Image
              src="/images/social-youtube.png"
              width={100}
              height={100}
              alt="YouTube"
            />
          </Link>
        )}
      </div>
      <div className={styles.socialText}>Connect with us online</div>
      <div className={`${styles.socialBG} ${styles.bg1}`}></div>
      <div className={`${styles.socialBG} ${styles.bg2}`}></div>
    </div>
  );
};

export { SocialLinks as default };
