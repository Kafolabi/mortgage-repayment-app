import Inputs from "./Inputs";
import MortgageTypes from "./MortgageTypes";
import Repayments from "./Repayments";
import ResultsCompleted from "./ResultsCompleted";
import { useState } from "react";
// import ErrorMessage from "./ErrorMessage";

const Calculator = () => {
  const currencies = ["£", "€", "$"];

  const [mortgageAmount, setMortgageAmount] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("GBP");
  const [monthlyRepayment, setMonthlyRepayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("£");

  // const [error, setError] = useState(false);

  // Function to determine the currency symbol
  const checkMortgageType = (type) => {
    let symbol = "£"; // Default
    if (type === "USD") symbol = "$";
    if (type === "NGN") symbol = "₦";
    if (type === "EUR") symbol = "€";
    return symbol;
  };

  // const [inputValue, setInputValue] = useState("");

  // Function to calculate mortgage repayment and total interest
  const calculateRepayment = () => {
    const inputs = document.getElementsByTagName("input");
    const amount = Number(inputs[0]?.value);
    const years = Number(inputs[1]?.value);
    const rate = Number(inputs[2]?.value);
    const type = document.getElementById("currency")?.value || "GBP";
    // const [currencies, ...types] = [
    //   ...document.getElementsByClassName("types"),
    // ];
    // console.log(currencies, types);
    console.log(document.getElementById("currency"));

    setMortgageAmount(amount);
    setYears(years);
    setInterestRate(rate);
    setMortgageType(type);
    setCurrencySymbol(checkMortgageType(type));

    if (amount > 0 && years > 0 && rate > 0) {
      const monthlyInterestRate = rate / 100 / 12;
      const numberOfPayments = years * 12;

      let repayment = 0;
      let interest = 0;

      if (type === "Repayment" || type === "GBP") {
        repayment =
          (amount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        interest = repayment * numberOfPayments - amount; // ✅ Total interest paid
      } else {
        repayment = amount * monthlyInterestRate; // Interest-only payment
        interest = repayment * numberOfPayments; // ✅ Total interest paid
      }

      setMonthlyRepayment(repayment || 0);
      setTotalInterest(interest || 0); // ✅ Store total interest
    }
  };

  // State for errors
  const [errors, setErrors] = useState({
    mortgageAmount: false,
    years: false,
    interestRate: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new error state based on empty fields
    // const newErrors = {
    //   mortgageAmount: mortgageAmount.toString().trim() === "0",
    //   years: years === 0,
    //   interestRate: interestRate === 0,
    // };

    // setErrors(newErrors);
    let newErrors = {};

    if (!mortgageAmount) newErrors.mortgageAmount = "This field is required.";
    if (!years) newErrors.years = "This field is required.";
    if (!interestRate) newErrors.interestRate = "This field is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    }
  };

  const clearValues = () => {
    const inputs = document.getElementsByTagName("input");
    [...inputs].forEach((input) => {
      input.value = "";
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-white text-slate-900 px-6 pb-10 rounded-s-xl relative z-10"
      >
        <div className="flex justify-between">
          <span className="font-bold py-9">Mortgage Calculator</span>
          <span
            className="opacity-60 py-9 text-sm cursor-pointer underline"
            onClick={clearValues}
          >
            Clear all
          </span>
        </div>
        <div className="flex-1 relative overflow-visible">
          <Inputs
            labels="Mortgage Amount"
            placeholders="£"
            state={true}
            currencies={currencies}
            errors={errors?.mortgageAmount || ""}
          />
        </div>

        <div className="md:flex md:flex-row md:space-x-8">
          <div className="flex-1 relative overflow-visible">
            <Inputs
              labels="Mortgage Term"
              placeholders="years"
              state={false}
              errors={errors?.years || ""}
            />
            {console.log(errors?.years)}
          </div>
          <div className="flex-1 relative overflow-visible">
            <Inputs
              labels="Interest Rate"
              placeholders="%"
              state={false}
              errors={errors?.interestRate || ""}
            />
          </div>
        </div>
        <span className="block text-sm font-medium text-gray-700 text-left pb-2">
          Mortgage Type
        </span>
        <MortgageTypes mortgageType="Repayment" value="Repayment" />
        <MortgageTypes mortgageType="Interest Only" value="interestOnly" />
        <Repayments onCalculate={calculateRepayment} />
      </form>
      <ResultsCompleted
        monthhlyRepayment={monthlyRepayment}
        totalInterest={totalInterest}
        currencySymbol={currencySymbol}
      />
    </>
  );
};

export default Calculator;
