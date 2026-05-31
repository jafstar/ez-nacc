import React from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import styles from "./styles.module.css";

// --- field helpers (work for any content model) ---

function getItemTitle(item) {
  return (
    item.content_title ??
    item.content_fields?.title ??
    item.content_fields?.name ??
    "Untitled"
  );
}

function getItemImage(item) {
  return item.content_fields?.image ?? item.content_fields?.image_url ?? null;
}

function getItemIntro(item) {
  return (
    item.content_fields?.intro ??
    item.content_fields?.description ??
    item.content_fields?.bio ??
    ""
  );
}

function getItemTags(item) {
  const tags = item.content_fields?.tags;
  return Array.isArray(tags) ? tags : [];
}

function getItemCategory(item) {
  return item.content_fields?.category ?? null;
}

// Build a URL for the list page, preserving active filters
function listUrl(type, { tag, category, q, page } = {}) {
  const sp = new URLSearchParams();
  if (tag) sp.set("tag", tag);
  if (category) sp.set("category", category);
  if (q) sp.set("q", q);
  if (page && page > 1) sp.set("page", String(page));
  const qs = sp.toString();
  return `/${type}${qs ? `?${qs}` : ""}`;
}

export default function ContentTypeList({
  data,
  type,
  total,
  page,
  limit,
  activeTag,
  activeCategory,
  q,
}) {
  const allTags = [...new Set(data.flatMap(getItemTags))].sort();
  const allCategories = [
    ...new Set(data.map(getItemCategory).filter(Boolean)),
  ].sort();
  const totalPages = limit > 0 ? Math.ceil(total / limit) : 1;
  const hasSidebar = allTags.length > 0 || allCategories.length > 0;
  const label = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <section className="blog-sidebar">
      <div className="container">
        <div className="row">
          {/* ── Sidebar ─────────────────────────────────────────── */}
          {hasSidebar && (
            <div className="col-lg-3 col-md-4 mb-4">
              <aside className={styles.sidebar}>
                {/* Search */}
                <div className={styles.sidebarBlock}>
                  <h4 className={styles.sidebarTitle}>Search</h4>
                  <form
                    method="GET"
                    action={`/${type}`}
                    className={styles.searchForm}
                  >
                    <input
                      type="text"
                      name="q"
                      defaultValue={q ?? ""}
                      placeholder={`Search ${label}…`}
                      className={styles.searchInput}
                    />
                    {activeTag && (
                      <input type="hidden" name="tag" value={activeTag} />
                    )}
                    {activeCategory && (
                      <input
                        type="hidden"
                        name="category"
                        value={activeCategory}
                      />
                    )}
                    <button type="submit" className={styles.searchBtn}>
                      Search
                    </button>
                  </form>
                </div>

                {/* Categories */}
                {allCategories.length > 0 && (
                  <div className={styles.sidebarBlock}>
                    <h4 className={styles.sidebarTitle}>Categories</h4>
                    <ul className={`list-unstyled ${styles.filterList}`}>
                      {activeCategory && (
                        <li>
                          <Link href={listUrl(type, { tag: activeTag, q })}>
                            All
                          </Link>
                        </li>
                      )}
                      {allCategories.map((cat) => (
                        <li
                          key={cat}
                          className={activeCategory === cat ? styles.active : ""}
                        >
                          <Link
                            href={listUrl(type, {
                              category: cat,
                              tag: activeTag,
                              q,
                            })}
                          >
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {allTags.length > 0 && (
                  <div className={styles.sidebarBlock}>
                    <h4 className={styles.sidebarTitle}>Tags</h4>
                    <div className={styles.tagCloud}>
                      {activeTag && (
                        <Link
                          href={listUrl(type, { category: activeCategory, q })}
                          className={styles.tag}
                        >
                          All
                        </Link>
                      )}
                      {allTags.map((tag) => (
                        <Link
                          key={tag}
                          href={listUrl(type, {
                            tag,
                            category: activeCategory,
                            q,
                          })}
                          className={`${styles.tag}${activeTag === tag ? ` ${styles.tagActive}` : ""}`}
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          )}

          {/* ── Content grid ─────────────────────────────────────── */}
          <div className={hasSidebar ? "col-lg-9 col-md-8" : "col-12"}>
            {/* Active filter chips */}
            {(activeTag || activeCategory || q) && (
              <div className={`${styles.filterChips} mb-3`}>
                <span className="me-2">Filtering by:</span>
                {q && (
                  <span className={styles.chip}>
                    &ldquo;{q}&rdquo;{" "}
                    <Link
                      href={listUrl(type, {
                        tag: activeTag,
                        category: activeCategory,
                      })}
                    >
                      ×
                    </Link>
                  </span>
                )}
                {activeTag && (
                  <span className={styles.chip}>
                    Tag: {activeTag}{" "}
                    <Link
                      href={listUrl(type, { category: activeCategory, q })}
                    >
                      ×
                    </Link>
                  </span>
                )}
                {activeCategory && (
                  <span className={styles.chip}>
                    Category: {activeCategory}{" "}
                    <Link href={listUrl(type, { tag: activeTag, q })}>×</Link>
                  </span>
                )}
              </div>
            )}

            {data.length === 0 ? (
              <p className={styles.empty}>No results found.</p>
            ) : (
              <div className="row">
                {data.map((item, idx) => {
                  const title = getItemTitle(item);
                  const image = getItemImage(item);
                  const intro = getItemIntro(item);
                  const tags = getItemTags(item);
                  const cat = getItemCategory(item);
                  const date = DateTime.fromISO(item.created_at).toFormat(
                    "LLL d, yyyy"
                  );
                  const href = `${item.model_slug}${item.content_slug}`;

                  return (
                    <div
                      key={item.content_id ?? idx}
                      className="col-md-6 col-12 mb-4"
                    >
                      <div className="blog-sidebar__single">
                        {image && (
                          <div className="blog-sidebar__img">
                            <Link href={href}>
                              <img
                                src={image}
                                alt={title}
                                className={styles.cardImage}
                              />
                            </Link>
                          </div>
                        )}
                        <div className="blog-sidebar__content">
                          {cat && (
                            <Link
                              href={listUrl(type, {
                                category: cat,
                                tag: activeTag,
                                q,
                              })}
                              className={styles.categoryBadge}
                            >
                              {cat}
                            </Link>
                          )}
                          <h3 className="blog-sidebar__title">
                            <Link href={href}>{title}</Link>
                          </h3>
                          <p className={styles.dateLine}>{date}</p>
                          {intro && (
                            <p
                              className="blog-sidebar__text"
                              dangerouslySetInnerHTML={{
                                __html: String(intro).replaceAll(
                                  "\n",
                                  "<br />"
                                ),
                              }}
                            />
                          )}
                          {tags.length > 0 && (
                            <div className={`${styles.tagCloud} mt-2`}>
                              {tags.map((tag) => (
                                <Link
                                  key={tag}
                                  href={listUrl(type, {
                                    tag,
                                    category: activeCategory,
                                    q,
                                  })}
                                  className={styles.tag}
                                >
                                  {tag}
                                </Link>
                              ))}
                            </div>
                          )}
                          <div className="text-end mt-3">
                            <Link
                              href={href}
                              className="text-decoration-underline"
                            >
                              {">"} Read more…
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="blog-page__pagination mt-4">
                <ul className="pg-pagination list-unstyled d-flex flex-wrap gap-2">
                  {page > 1 && (
                    <li>
                      <Link
                        href={listUrl(type, {
                          page: page - 1,
                          tag: activeTag,
                          category: activeCategory,
                          q,
                        })}
                      >
                        &lsaquo;
                      </Link>
                    </li>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <li
                        key={p}
                        className={p === page ? "count active" : "count"}
                      >
                        <Link
                          href={listUrl(type, {
                            page: p,
                            tag: activeTag,
                            category: activeCategory,
                            q,
                          })}
                        >
                          {p}
                        </Link>
                      </li>
                    )
                  )}
                  {page < totalPages && (
                    <li>
                      <Link
                        href={listUrl(type, {
                          page: page + 1,
                          tag: activeTag,
                          category: activeCategory,
                          q,
                        })}
                      >
                        &rsaquo;
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
