import React from "react";
import Link from "next/link";
// import RecentDonation from "../donate-sidebar/RecentDonation";
import $ from "jquery";

export default class DonationDetailsContent extends React.Component {
  // componentDidMount() {
  //   // const $ = window.$;

  //   if ($("#donate-amount__predefined").length) {
  //     let donateInput = $("#donate-amount");
  //     $("#donate-amount__predefined")
  //       .find("li")
  //       .on("click", function (e) {
  //         e.preventDefault();
  //         let amount = $(this).find("a").text();
  //         donateInput.val(amount);
  //         $("#donate-amount__predefined").find("li").removeClass("active");
  //         $(this).addClass("active");
  //       });
  //   }

  //   if ($(".progress-levels .progress-box .bar-fill").length) {
  //     $(".progress-box .bar-fill").each(
  //       function () {
  //         $(".progress-box .bar-fill").appear(function () {
  //           var progressWidth = $(this).attr("data-percent");
  //           $(this).css("width", progressWidth + "%");
  //         });
  //       },
  //       {
  //         accY: 0,
  //       }
  //     );
  //   }

  //   if ($(".count-bar").length) {
  //     $(".count-bar").appear(
  //       function () {
  //         var el = $(this);
  //         var percent = el.data("percent");
  //         $(el).css("width", percent).addClass("counted");
  //       },
  //       {
  //         accY: -50,
  //       }
  //     );
  //   }

  //   if ($(".count-box").length) {
  //     $(".count-box").appear(
  //       function () {
  //         var $t = $(this),
  //           n = $t.find(".count-text").attr("data-stop"),
  //           r = parseInt($t.find(".count-text").attr("data-speed"), 10);

  //         if (!$t.hasClass("counted")) {
  //           $t.addClass("counted");
  //           $({
  //             countNum: $t.find(".count-text").text(),
  //           }).animate(
  //             {
  //               countNum: n,
  //             },
  //             {
  //               duration: r,
  //               easing: "linear",
  //               step: function () {
  //                 $t.find(".count-text").text(Math.floor(this.countNum));
  //               },
  //               complete: function () {
  //                 $t.find(".count-text").text(this.countNum);
  //               },
  //             }
  //           );
  //         }
  //       },
  //       {
  //         accY: 0,
  //       }
  //     );
  //   }

  //   if ($("#datepicker").length) {
  //     $("#datepicker").datepicker();
  //   }

  //   if ($("#datepicker2").length) {
  //     $("#datepicker2").datepicker();
  //   }

  //   if ($("#datepicker-inline").length) {
  //     $("#datepicker-inline").datepicker();
  //   }

  //   $('input[name="time"]').ptTimeSelect();
  // }
  render() {
    let publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL + "/";
    return (
      <>
        <section className="donation-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3">
                <div className="donation-details__sidebar">
                  {/* <RecentDonation /> */}
                </div>
              </div>
              <div className="col-xl-10 col-lg-9">
                <div className="donation-details__left">
                  {/* <div className="donation-details__top">
                    <div className="donation-details__top-img">
                      <img
                        src={
                          publicUrl +
                          "assets/images/resources/donation-details-img-1.jpg"
                        }
                        alt=""
                      />
                      <div className="donation-details__category">
                        <span>Food</span>
                      </div>
                    </div>
                    <div className="donation-details__top-progress-box clearfix">
                      <div className="donation-details__progress">
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="36%"
                          >
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="donation-details__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                      <div className="donation-details__top-donate-btn-box">
                        <Link
                          href={
                            process.env.NEXT_PUBLIC_PUBLIC_URL + `/donate-now`
                          }
                          className="donate-btn thm-btn"
                        >
                          Donate Now
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      will provide an ats resume writing and Blog.
                    </h3>
                    <p className="donation-details__text-1">
                      Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                      phaedrum. There are many variations of passages of Lorem
                      Ipsum available, but the majority have alteration in some
                      injected or words which don&apos;t look even slightly
                      believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn&apos;t anything
                      embarrang hidden in the middle of text. All the Lorem
                      Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet.
                    </p>
                    <div className="donation-details__content-img-boxes">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="donation-details__content-img-single">
                            <img
                              src={
                                publicUrl +
                                "assets/images/resources/donation-details-content-img-1.jpg"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="donation-details__content-img-single">
                            <img
                              src={
                                publicUrl +
                                "assets/images/resources/donation-details-content-img-2.jpg"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="donation-details__title">Description</h3>
                    <p className="donation-details__text-2">
                      Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                      phaedrum. There are many variations of passages of Lorem
                      Ipsum available, but the majority have alteration in some
                      injected
                    </p>
                    <ul className="list-unstyled donation-details__points">
                      <li>
                        <div className="icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="text">
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="text">
                          <p>There are many variations of passages</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="text">
                          <p>Entum estibulum dignissim lipsm posuere.</p>
                        </div>
                      </li>
                    </ul>
                    <p className="donation-details__text-3">
                      Lorem Ipsum has been the industry&apos;s standard dummy
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type simen book.
                    </p>
                    <div className="donation-details__presentation">
                      <div className="donation-details__presentation-icon-box">
                        <span className="far fa-file-pdf"></span>
                        <h4>Our Work</h4>
                      </div>
                      <div className="donation-details__presentation-btn-box">
                        <a
                          href="#"
                          className="thm-btn donation-details__presentation-btn"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
