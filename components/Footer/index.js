import React from "react";
import Image from "next/image";
import Link from "next/link";

import imgPaymentTypes from "./img/payment-types.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-gray-dark text-white pad-v-40">
        <nav className="flex space-between pad-20 max-w">
          <div className="flex space-evenly footer-nav w50 pad-left-10">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/take-action">Take Action</Link>
              </li>
              <li>
                <Link href="/help">Ask for Help</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/team">Meet the Team</Link>
              </li>
              <li>
                <Link href="/gallery">Photo Gallery</Link>
              </li>
            </ul>
          </div>

          <div className="flex space-evenly footer-nav w50">
            <ul>
              <li>
                <Link href="/faqs">FAQ&apos;s</Link>
              </li>
              <li>
                <Link href="/volunteer-handbook">Our Volunteer Handbook</Link>
              </li>
              <li>
                <Link href="/allies">Our Allies</Link>
              </li>
              <li>
                <Link href="/climate-impact">Our Climate Impact</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/events">Upcoming Events</Link>
              </li>
              <li>
                <Link href="/volunteer-handbook">Volunteer Opportunities</Link>
              </li>
              <li>
                <Link href="/allies">Donation Opportunities</Link>
              </li>
              <li>
                <Link href="/climate-impact">Financials and Reports</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <div className="bg-gray-light pad-20  text-center-mobile">
        <div className="flex-center space-between max-w w100-mobile">
          <div className="w100-mobile">
            <Image
              src={imgPaymentTypes}
              width={300}
              height={47}
              alt="Payment types: PayPal, G Pay, Apple Pay, Stripe"
            />
          </div>
          <div className="text-dark-grey w100-mobile">
            Please donate whatever you can through PayPal or Stripe (including
            Google Pay, Apple Pay, or direct debit).
          </div>
        </div>
      </div> */}
      <div className="bg-gray-dark text-white pad-20">
        <div className="flex space-between max-w text-center-mobile">
          <div>&nbsp; </div>
          <hr className="hr-mobile" />
          <div className="w100-mobile text-center-mobile">© NACC 2023</div>
        </div>
      </div>
    </div>
  );
};

export { Footer as default };
