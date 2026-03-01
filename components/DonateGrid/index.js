import React from "react";
import Link from "next/link";
import $ from "jquery";
import imgDemo from "@/public/assets/images/ez-gray-370x250.jpg";

const DonateGrid = ({ content }) => {
  //   componentDidMount() {
  //     // const $ = window.$;

  //     if ($("#donate-amount__predefined").length) {
  //       let donateInput = $("#donate-amount");
  //       $("#donate-amount__predefined")
  //         .find("li")
  //         .on("click", function (e) {
  //           e.preventDefault();
  //           let amount = $(this).find("a").text();
  //           donateInput.val(amount);
  //           $("#donate-amount__predefined").find("li").removeClass("active");
  //           $(this).addClass("active");
  //         });
  //     }

  //     if ($(".progress-levels .progress-box .bar-fill").length) {
  //       $(".progress-box .bar-fill").each(
  //         function () {
  //           $(".progress-box .bar-fill").appear(function () {
  //             var progressWidth = $(this).attr("data-percent");
  //             $(this).css("width", progressWidth + "%");
  //           });
  //         },
  //         {
  //           accY: 0,
  //         }
  //       );
  //     }

  //     if ($(".count-bar").length) {
  //       $(".count-bar").appear(
  //         function () {
  //           var el = $(this);
  //           var percent = el.data("percent");
  //           $(el).css("width", percent).addClass("counted");
  //         },
  //         {
  //           accY: -50,
  //         }
  //       );
  //     }

  //     if ($(".count-box").length) {
  //       $(".count-box").appear(
  //         function () {
  //           var $t = $(this),
  //             n = $t.find(".count-text").attr("data-stop"),
  //             r = parseInt($t.find(".count-text").attr("data-speed"), 10);

  //           if (!$t.hasClass("counted")) {
  //             $t.addClass("counted");
  //             $({
  //               countNum: $t.find(".count-text").text(),
  //             }).animate(
  //               {
  //                 countNum: n,
  //               },
  //               {
  //                 duration: r,
  //                 easing: "linear",
  //                 step: function () {
  //                   $t.find(".count-text").text(Math.floor(this.countNum));
  //                 },
  //                 complete: function () {
  //                   $t.find(".count-text").text(this.countNum);
  //                 },
  //               }
  //             );
  //           }
  //         },
  //         {
  //           accY: 0,
  //         }
  //       );
  //     }
  //   }

  return (
    <>
      <section className="donations-page">
        <div className="container">
          <div className="row">
            {content?.list?.map((itm, idx) => {
              return (
                <div
                  key={`cause-itm-${idx}`}
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="causes-one__single">
                    <div className="causes-one__img">
                      <img src={itm?.image ?? imgDemo.src} alt="" />
                    </div>
                    <div className="causes-one__content-box">
                      <div className="causes-one__donate-btn-box">
                        <Link
                          href={`${itm.link ?? "#"}`}
                          rel="noFollow"
                          target="_blank"
                          className="thm-btn causes-one__donate-btn"
                        >
                          Donate <span>${itm?.amount ?? "--"}</span>{" "}
                        </Link>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <Link href={`${itm.link ?? "#"}`}>
                            {itm?.title ?? ""}
                          </Link>
                        </h3>
                        <p>{itm.body ?? ""}</p>
                        <br />

                        {/* <div className="causes-one__progress">
                          <div className="causes-one__goals">
                            <p>
                              <span>${itm?.amount ?? "--"}</span>
                            </p>
                            <p>
                              <span></span>
                            </p>
                          </div>
                        </div> */}
                        {/* {itm.body ? (
                          <div className="causes-one__btn-box">
                            <Link href={`#`} className="causes-one__read-more">
                              Read More <span className="icon-plus-sign"></span>
                            </Link>
                          </div>
                        ) : null} */}
                      </div>
                    </div>
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

export { DonateGrid as default };
