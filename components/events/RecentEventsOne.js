import React from "react";
import Link from "next/link";

const testData = {
  // tagline: "Test tagline",
  // title: "Anything can go here <br /> on two lines even",
  list: [
    {
      img: "/assets/images/resources/recent-event-1-3.jpg",
      url: "",
      title: "Example Title 1",
      body: "To make sure education of change While atever motivates you to you no idea of where to.",
    },
    {
      img: "/assets/images/resources/recent-event-1-2.jpg",
      url: "",
      title: "Example Title 2",
      body: "To make sure education of change While atever motivates you to you no idea of where to.",
    },
  ],
};

const RecentEventsOne = (props) => {
  const content = Object.keys(props.content).length ? props.content : testData;
  return (
    <>
      <section className="recent-event">
        <div className="container">
          <div className="section-title text-center">
            {content.tagline && (
              <span className="section-title__tagline">
                {content.tagline ?? "Tagline example here"}
              </span>
            )}
            {content.title && (
              <h2
                className="section-title__title"
                dangerouslySetInnerHTML={{
                  __html: String(
                    content.title ?? "Title example <br /> can go here"
                  ).replaceAll("\n", "<br />"),
                }}
              ></h2>
            )}
          </div>
          <div className="row wow fadeInUp" data-wow-delay="100ms">
            {/* Recent Event Single */}
            {content?.list?.map((itm, idx) => {
              return (
                <div
                  key={`recent-events-one-item-${idx}`}
                  className="recent-event__single col-xl-6 col-lg-6"
                >
                  <div className="recent-event__img">
                    <img src={itm.img} alt="" />
                    <div className="recent-event__btn-box">
                      <Link
                        href={itm.url ?? "#"}
                        className="thm-btn recent-event__btn"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="recent-event__content">
                    <h3 className="recent-event__title">
                      <Link href={itm.url ?? "#"}>{itm.title}</Link>
                    </h3>
                    <p className="recent-event__text">{itm.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { RecentEventsOne as default };
