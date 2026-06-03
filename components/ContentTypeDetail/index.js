import React from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import {
  getContentTitle,
  getContentImage,
  getContentTags,
  getContentCategory,
} from "ez-content/server";

export default function ContentTypeDetail({ item, type }) {
  const { content_fields, created_at } = item;

  const date     = DateTime.fromISO(created_at).toFormat("LLL d, yyyy");
  const tags     = getContentTags(item);
  const category = getContentCategory(item);
  const title    = getContentTitle(item);

  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-3">
            <div className="sidebar">
              {/* Future: related content, author info, etc. */}
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details__left">
              {content_fields?.image && (
                <div className="blog-details__img">
                  <img src={content_fields.image} alt={title} />
                  <div className="blog-details__date">
                    <p>{date}</p>
                  </div>
                </div>
              )}

              <br />

              <div className="blog-details__content">
                <h3 className="blog-details__title">{title}</h3>

                {category && (
                  <p className="mb-2">
                    <Link
                      href={`/${type}?category=${encodeURIComponent(category)}`}
                      style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}
                    >
                      {category}
                    </Link>
                  </p>
                )}

                {/* Team / bio fields */}
                {content_fields?.position && (
                  <p className="mb-2" style={{ fontStyle: "italic" }}>
                    {content_fields.position}
                  </p>
                )}

                {content_fields?.intro && (
                  <div
                    className="blog-details__text-1 my-3"
                    dangerouslySetInnerHTML={{
                      __html: String(content_fields.intro).replaceAll(
                        "\n",
                        "<br />"
                      ),
                    }}
                  />
                )}

                {content_fields?.bio && (
                  <div
                    className="blog-details__text-2 my-3"
                    dangerouslySetInnerHTML={{
                      __html: String(content_fields.bio).replaceAll(
                        "\n",
                        "<br />"
                      ),
                    }}
                  />
                )}

                {content_fields?.body && (
                  <div
                    className="blog-details__text-2 my-3"
                    dangerouslySetInnerHTML={{
                      __html: String(content_fields.body).replaceAll(
                        "\n",
                        "<br />"
                      ),
                    }}
                  />
                )}

                {tags.length > 0 && (
                  <div className="blog-details__bottom mt-4">
                    <p className="blog-details__tags">
                      <span>Tags: </span>
                      {tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/${type}?tag=${encodeURIComponent(tag)}`}
                          className="me-2"
                        >
                          {tag}
                        </Link>
                      ))}
                    </p>
                  </div>
                )}

                <div className="mt-4">
                  <Link href={`/${type}`} className="text-decoration-underline">
                    &larr; Back to {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
