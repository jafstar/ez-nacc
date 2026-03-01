import React from "react";
import Link from "next/link";

export default function TeamList({ data }) {
  console.log("data: ", data);
  let publicUrl = "@/public/";
  return (
    <>
      <section className="team-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">NACC</span>
            <h2 className="section-title__title">Meet Our Team</h2>
          </div>

          {/* START ROW */}
          <div className="row">
            {data &&
              data.map((itm, idx) => {
                return (
                  <div
                    key={`team-itm-${idx}`}
                    className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    {/* Team One Single */}
                    <div className="team-one__single">
                      <div className="team-one__img">
                        <img
                          src={
                            itm.content_fields?.image ??
                            "@/public/assets/images/ez-gray-370x250.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="team-one__content">
                        <h4 className="team-one__name">
                          <Link href={`${itm?.model_slug}${itm?.content_slug}`}>
                            {itm.content_fields?.name}
                          </Link>
                        </h4>
                        <p className="team-one__title">
                          {itm.content_fields?.position ?? ""}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* END ROW */}
          </div>
        </div>
      </section>
    </>
  );
}
