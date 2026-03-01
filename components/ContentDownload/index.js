import React from "react";
import EZHTML from 'ez-content/EZHTML'

import Link from "next/link";
// import $ from "jquery";

const ContentDownload = ({content})=> {


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
           

                  <div className="donation-details__content">
                   
                 
             
                   <h3 className="donation-details__title">
                     {content.title ?? "Main Title"}
                    </h3>
                    <EZHTML 
                      el="p"  
                      text={content.desc}  
                      className="donation-details__text-3" 
                      default="Lorem Ipsum has been the industry&apos;s standard dummy
                      text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type simen book."
                    /> 
                 
                    <div className="donation-details__presentation">
                      <div className="donation-details__presentation-icon-box">
                        <span className="far fa-file-pdf"></span>
                        <h4>   {content.subtitle ?? "Sub Title"}</h4>
                        
                      </div>
                      <div className="donation-details__presentation-btn-box">
                        <Link
                          href={content.downloadUrl ?? "#"}
                          className="thm-btn donation-details__presentation-btn"
                        >
                          {content.downloadBtn}
                        </Link>
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


export {ContentDownload as default}