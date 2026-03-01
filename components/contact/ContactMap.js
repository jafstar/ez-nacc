import React from "react";

const ContactMap = ({ content }) => {
  return (
    <>
      <section className="contact-page-google-map">
        <iframe
          src={`${
            content.iframeSrc ??
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1932.5589479834823!2d35.502761619207135!3d-14.362588498617416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDIxJzQ1LjMiUyAzNcKwMzAnMTQuNCJF!5e0!3m2!1sen!2sus!4v1713310098449!5m2!1sen!2sus"
          }`}
          className="contact-page-google-map__one"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export { ContactMap as default };
