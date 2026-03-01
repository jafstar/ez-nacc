import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import heroBGImg from "./img/hero-bg.png";
const Hero = ({ content }) => {
  const colorBG = content.color_bg ? `${content.color_bg}` : "";
  const colorTitle = content.color_title ? `${content.color_title}` : "";
  const colorBody = content.color_body ? `${content.color_body}` : "";
  // console.log("content: ", content);
  // console.log("colorBG: ", colorBG);
  const classCheckButtons =
    !content.btn1_text && !content.btn2_text
      ? styles.noButtons
      : styles.hasButtons;

  return (
    <div
      style={{ backgroundColor: colorBG }}
      className={`${styles.ezHero} ${classCheckButtons}`}
    >
      <div>
        <h2 style={{ color: colorTitle }}>{content.title}</h2>
        <p
          style={{ color: colorBody }}
          dangerouslySetInnerHTML={{
            __html: String(content.body ?? "").replaceAll("\n", "<br />"),
          }}
        ></p>
      </div>

      <div className="flex w100 col-gap-20">
        {content.btn1_link && content.btn1_text && (
          <Link
            className="btn-lg btn-primary btn-stretch"
            href={content.btn1_link}
          >
            {content.btn1_text}
          </Link>
        )}
        {content.btn2_link && content.btn2_text && (
          <Link
            className="btn-lg btn-secondary btn-stretch"
            href={content.btn2_link}
          >
            {content.btn2_text}
          </Link>
        )}
      </div>
      {colorBG === "" ? (
        <img
          className={styles.bgImg}
          src={content.bg_img || heroBGImg.src}
          alt="background image"
        />
      ) : null}
    </div>
  );
};

export { Hero as default };

/*
body
btn1_link
btn1_text
btn2_link
btn2_text
title
*/
