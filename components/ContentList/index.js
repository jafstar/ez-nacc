import React from "react";
import EZHTML from 'ez-content/EZHTML'

// import Link from "next/link";
// import $ from "jquery";

const ContentList = ({content})=> {


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
                      text={content.topText}  
                      className="donation-details__text-2" 
                      default=""
                    /> 

                    {
                      !!content?.list.length && (
                    <ul className="list-unstyled donation-details__points">
                      {
                        content?.list.map((itm,idx)=> {
                          return (
                            <li key={`content-list-item-${idx}`}>
                            <div className="icon">
                              <span className={itm.icon ?? "icon-comment"}></span>
                            </div>
                            <div className="text">
                              <p>{itm.text}</p>
                            </div>
                          </li>
                          )
                        })
                      }
                     
                    </ul>
                  )
                  }
                    <EZHTML 
                      el="p"  
                      text={content.botText}  
                      className="donation-details__text-3" 
                      default=""
                    /> 
          
               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  
}


export {ContentList as default}