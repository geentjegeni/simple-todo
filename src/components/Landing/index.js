import React from "react";
import Add from "./Add";

const Landing = () => {
  return (
    <div className="landing-page">
      <Add />
      <div id="BrzyHr_app"></div>
      <script src="https://parks-rec.breezy.hr/embed/js?bzsrc=jswidget&include_filters=true&no_pos_msg=true"></script>
    </div>
  );
};

export default Landing;
