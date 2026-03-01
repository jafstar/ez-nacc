"use client";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";
import ToasterContext from "./context/ToastContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta key={"meta-utf8"} charSet="UTF-8" />
        <meta
          key={"meta-viewport"}
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          key={"meta-Compatible"}
          httpEquiv="X-UA-Compatible"
          content="ie=edge"
        />
        <meta 
          key={"meta-permissions"}
          httpEquiv="Permissions-Policy" 
          content="interest-cohort=()" 
        />

        <meta
          httpEquiv="Content-Security-Policy"
          content="block-all-mixed-content"
        />



        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicons/favicon-16x16.png"
        />
        <meta name="deScription" content="Needed Action and Community Care" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`https://www.nacc.ngo${pathname}`} />

        <link
          rel="stylesheet"
          href="/assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/animate/custom-animate.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/fontawesome/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/nouislider/nouislider.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/nouislider/nouislider.pips.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/odometer/odometer.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/sopot-icons/style.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/tiny-slider/tiny-slider.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/reey-font/stylesheet.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/bxslider/jquery.bxslider.css"
        />
        <link rel="stylesheet" href="/assets/vendors/vegas/vegas.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/timepicker/timePicker.css"
        />

        <link rel="stylesheet" href="/assets/css/sopot.css" />
        <link rel="stylesheet" href="/assets/css/sopot-responsive.css" />

        <title>NACC</title>
        <Script src="https://www.instagram.com/embed.js"></Script>

        <Script src="/assets/vendors/jquery/jquery-3.6.0.min.js" defer></Script>
        <Script
          src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"
          defer
        ></Script>
        <Script src="/assets/vendors/jarallax/jarallax.min.js" defer></Script>
        <Script
          src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"
          defer
        ></Script>
        <Script
          src="/assets/vendors/jquery-appear/jquery.appear.min.js"
          defer
        ></Script>
        <Script
          src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"
          defer
        ></Script>
        <Script
          src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"
          defer
        ></Script>
        <Script
          src="/assets/vendors/jquery-validate/jquery.validate.min.js"
          defer
        ></Script>
        <Script
          src="/assets/vendors/nouislider/nouislider.min.js"
          defer
        ></Script>
        <Script src="/assets/vendors/odometer/odometer.min.js" defer></Script>
        <Script src="/assets/vendors/swiper/swiper.min.js" defer></Script>
        <Script
          src="/assets/vendors/tiny-slider/tiny-slider.min.js"
          defer
        ></Script>
        <Script src="/assets/vendors/wnumb/wNumb.min.js" defer></Script>
        <Script src="/assets/vendors/wow/wow.js" defer></Script>
        <Script src="/assets/vendors/isotope/isotope.js" defer></Script>
        <Script src="/assets/vendors/countdown/countdown.min.js" defer></Script>
        <Script
          src="/assets/vendors/owl-carousel/owl.carousel.min.js"
          defer
        ></Script>
        <Script
          src="/assets/vendors/bxslider/jquery.bxslider.min.js"
          defer
        ></Script>
        <Script src="/assets/vendors/vegas/vegas.min.js" defer></Script>
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" defer></Script>
        <Script src="/assets/vendors/timepicker/timePicker.js" defer></Script>
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <ToasterContext />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
