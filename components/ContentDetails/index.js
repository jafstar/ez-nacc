"use client";
import React from "react";
import EZHTML from 'ez-content/EZHTML'
// import Link from "next/link";
// import $ from "jquery";

const ContentDetails = ({content})=> {


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
              <div className="col-xl-8 col-lg-7">
                <div className="donation-details__left">
           

                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                     {content.title ?? "Title goes here"}
                    </h3>
                
                     <EZHTML 
                      el="p"  
                      text={content.body}  
                      className="donation-details__text-1" 
                      default="Lorem ipsum dolor sit amet,<br /> cibo mundi ea duo,<br /> vim exerciphaedrum."
                    /> 

                    <div className="donation-details__content-img-boxes">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="donation-details__content-img-single">

                            {
                              content.image1 && (
                                <img
                              src={
                                content.image1 ?? 
                                "/assets/images/ez-gray-370x250.jpg"
                              }
                              alt=""
                            />
                              )
                            }
                            
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="donation-details__content-img-single">
                            {
                              content.image2 && (
                                <img
                                src={
                                  content.image2 ?? 
                                  "/assets/images/ez-gray-370x250.jpg"
                                }
                                alt=""
                              />
                              )
                            }
                          
                          </div>
                        </div>
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


export {ContentDetails as default}