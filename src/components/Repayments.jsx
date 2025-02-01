import { ICON_CALCULATOR, KEY } from "../constants/index";
import { useState, useEffect } from "react";
import Inputs from "./Inputs";

const Repayments = () => {
  const calculateRepayments = () => {};
  return (
    <div className="text-left mt-3">
      <button
        className="rounded-3xl px-5 py-3 mt-5 bg-lime text-sm font-bold hover:opacity-70 focus:opacity-100"
        onClick={() => alert("Calculating Interest rates and repayments ... ")}
      >
        <img
          src={ICON_CALCULATOR}
          alt="Icon-calculator"
          className="inline px-2"
        />
        Calculate Repayments
      </button>
    </div>
  );
};

export default Repayments;
