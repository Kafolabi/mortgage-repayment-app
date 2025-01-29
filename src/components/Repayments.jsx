import { ICON_CALCULATOR, KEY } from "../constants/index";
import { useState, useEffect } from "react";
import Inputs from "./Inputs";

const Repayments = () => {
  // const [rate, setRate] = useState(0);
  // console.log(rate);

  // useEffect(() => {
  //   const retrieveCurrencyData = async () => {
  //     const response = await fetch(
  //       `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${KEY}&symbols=USD,EUR,CAD&base=GBP`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   retrieveCurrencyData();
  // }, []);

  return (
    <div className="text-left mt-3">
      <button
        className="rounded-3xl px-5 py-3 mt-5 bg-lime text-sm font-bold hover:opacity-70 focus:opacity-100"
        onClick={() => alert("Hello")}
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
