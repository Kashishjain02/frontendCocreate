import React from "react";
import Investhero from "../components/Investhero";
import Investapply from "../components/Investapply";
import Investpitch from "../components/Investpitch";
import FeedbackForm from "../components/FeedbackForm";
export const Investor = () => {
  return (
    <>
      {<Investhero />}
      {<Investapply />}
      {<Investpitch />}
      {<FeedbackForm/>}
    </>
  );
};
