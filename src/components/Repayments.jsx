import { ICON_CALCULATOR, KEY } from "../constants/index";
import { useState, useEffect } from "react";
import ResultsCompleted from "./ResultsCompleted";

const Repayments = ({ onCalculate }) => {
  // const [mortgageAmount, setMortgageAmount] = useState(0);
  // const [years, setYears] = useState(0);
  // const [interestRate, setInterestRate] = useState(0);
  // const [mortgageType, setMortgageType] = useState(""); // State for select element

  // useEffect(() => {
  //   const fetchValues = () => {
  //     const inputs = document.getElementsByTagName("input");
  //     const select = document.getElementsByTagName("select")[0]; // Get first select element

  //     setMortgageAmount(Number(inputs[0]?.value) || 0);
  //     setYears(Number(inputs[1]?.value) || 0);
  //     setInterestRate(Number(inputs[2]?.value) || 0);
  //     setMortgageType(select?.value || ""); // Get selected value from select element
  //   };

  //   // Fetch initial values when the component mounts
  //   fetchValues();

  //   // Add event listeners for inputs and select element
  //   document.addEventListener("input", fetchValues);
  //   document.addEventListener("change", fetchValues); // For select element

  //   // Cleanup event listeners when the component unmounts
  //   return () => {
  //     document.removeEventListener("input", fetchValues);
  //     document.removeEventListener("change", fetchValues);
  //   };
  // }, []);

  // if (!mortgageAmount || !years || !interestRate) {
  //   return <p>Please enter all values.</p>;
  // }

  // const monthlyInterestRate = interestRate / 100 / 12;
  // const numberOfPayments = years * 12;

  // // Loan repayment formula
  // const monthlyRepayment =
  //   (mortgageAmount * monthlyInterestRate) /
  //   (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  // const interest = (mortgageAmount * interestRate * years) / 100;

  // const checkMortgageType = () => {
  //   let currencies = 0;
  //   if (mortgageType === "GBP") currencies = "£";
  //   if (mortgageType === "USD") currencies = "$";
  //   if (mortgageType === "NGN") currencies = "₦";
  //   if (mortgageType === "EUR") currencies = "€";
  //   return currencies;
  // };

  return (
    <div className="text-left mt-3">
      <button
        className="rounded-3xl px-5 py-3 mt-5 bg-lime text-sm font-bold hover:opacity-70 focus:opacity-100"
        onClick={onCalculate}
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
