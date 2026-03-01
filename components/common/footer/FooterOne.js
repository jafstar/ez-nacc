import React from "react";

const FooterOne = () => {
  return (
    <>
      <footer className="site-footer-one">
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © 2024 Copyright by{" "}
                <a href="https://nacc.ngo">
                  Needed Actions for Community Care and Development (NACC)
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { FooterOne as default };
