import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header ">
      <h1>
        The Effect of Leadership Styles on Employee Performance:
        <br className="break" /> A Case Study of a NGO in Myanmar
      </h1>
      <p className="container">
        My name is Naw Ja Ding Rin, I am conducting research for my Master of
        Business Administration (MBA) at Ayeyarwaddy Business School and
        collaboration with European International University (EIU). My thesis
        title is "The Effect of Leadership Styles on Employee Performance: A
        Case Study of a NGO in Myanmar" in partial fulfillment of my study. In
        order to collect representative and meaningful data, I would like to
        request you to fill below questionnaires. The information you provide
        will be used only for this study purpose and kept confidential. In case
        of clarification, pleace contact me at <span>09400040511</span>. Thank
        you in advance and your co-operation will be highly appreciated.
      </p>
    </header>
  );
}

export default Header;
