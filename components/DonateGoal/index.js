import React from "react";
import Script from "next/script";

import "./styles.css";

const DonateGoal = ({ content }) => {
  const dataPercent = React.useMemo(() => {
    if (content && content.raised && content.goal) {
      const raised = parseFloat(content.raised.replace(/,/g, ""));
      const goal = parseFloat(content.goal.replace(/,/g, ""));

      const percent = Number((raised / goal) * 100).toFixed(2);
      if (percent < 1) {
        return percent;
      } else {
        return percent;
      }
    } else {
      return 0;
    }
  }, [content]);

  return (
    <section>
      <div className="donate-goal">
        <div className="causes-one__progress">
          <div className="bar">
            <div
              className="bar-inner count-bar"
              data-percent={`${dataPercent}`}
            >
              <div className="count-text">{dataPercent}%</div>
            </div>
          </div>
          <div className="causes-one__goals">
            <p>
              <span>${content?.raised ?? ""}</span> Raised
            </p>
            <p>
              <span>${content?.goal ?? ""}</span> Goal
            </p>
          </div>
        </div>
      </div>
      <Script id="AboutTwoMagnificPopup">
        {`
                if ($(".count-bar").length) {
              $(".count-bar").appear(
                function () {
                  var el = $(this);
                  var percent = el.data("percent");
                  $(el).css("width", percent).addClass("counted");
                },
                {
                  accY: -50,
                }
              );
            }
        `}
      </Script>
    </section>
  );
};

export { DonateGoal as default };
