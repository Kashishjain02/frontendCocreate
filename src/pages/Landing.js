import React from "react";
import Offerings from "../components/Offerings";
import Home from "../components/Home";
import Whyjoin from "../components/Whyjoin";
import MovingLogo from "../components/MovingLogo";
import Gettingstarted from "../components/Gettingstarted";
import UpcomingEvent from "../components/Upcomingevents";
import Knowledge from "../components/Knowledge";
import Newsletter from "../components/Newsletter";
import Joinnow from "../components/Joinnow";
import Accordion from "../components/Accordion/Accordion";
import { Bluerectangle } from "../components/Bluerectangle";
import Changemaker from "../components/Changemaker";

export const Landing = () => {
  return (
    <>
      {<Home />}
      {<Offerings />}
      {<MovingLogo />}
      {<Gettingstarted />}
      {<Whyjoin />}
      {<Joinnow />}
      {<UpcomingEvent />}
      {/* {<Changemaker />} */}
      {/* {<Knowledge />} */}
      {<Bluerectangle />}
      {<Accordion />}
      {<Newsletter />}
    </>
  );
};
