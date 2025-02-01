import { ILLUSTRATION_EMPTY } from "../constants/index";
import Inputs from "./Inputs";
import MortgageTypes from "./MortgageTypes";
import Repayments from "./Repayments";

const Calculator = () => {
  const currencies = ["£", "€", "$"];

  return (
    <section className="flex-1 bg-white text-slate-900 px-6 pb-10 rounded-s-xl relative z-10">
      <div className="flex justify-between">
        <span className="font-bold py-9">Mortgage Calculator</span>
        <span className="opacity-60 py-9 text-sm cursor-pointer underline">
          Clear all
        </span>
      </div>
      <Inputs
        labels="Mortgage Amount"
        placeholders="£"
        state={true}
        currencies={currencies}
      />
      <div className="md:flex md:flex-row md:space-x-8">
        <Inputs labels="Mortgage Term" placeholders="years" state={false} />
        <Inputs labels="Interest Rate" placeholders="%" state={false} />
      </div>
      <span className="block text-sm font-medium text-gray-700 text-left pb-2">
        Mortgage Type
      </span>
      <MortgageTypes mortgageType="Repayment" />
      <MortgageTypes mortgageType="Interest Only" />
      <Repayments />
    </section>
  );
};

export default Calculator;
