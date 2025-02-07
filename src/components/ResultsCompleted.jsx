// import ResultsValues from "./ResultsValues";

// const ResultsCompleted = ({
//   monthhlyRepayment,
//   currencySymbol,
//   totalInterest,
// }) => {
//   return (
//     <section className="flex-1 bg-slate900 text-white p-10 md:rounded-e-3xl md:rounded-bl-[6rem] relative z-10">
//       <h1 className="text-text-center font-bold text-lg">Your Results</h1>
//       <p className="text-center opacity-70 text-sm leading-relaxed pt-5">
//         Your results are shown based on the information you provided. To adjust
//         the results, edit the form and click 'calculate payments' again
//       </p>
//       <div className="bg-slatedeep shadow-md rounded-md p-5 mt-10 text-left">
//         <div className="text-sm opacity-70">Your monthly repayments</div>
//         <div className="text-3xl font-bold pt-3 text-lime">
//           {monthhlyRepayment !== "" &&
//             `${currencySymbol}${Number(monthhlyRepayment).toLocaleString(
//               "en-US"
//             )}`}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResultsCompleted;

const ResultsCompleted = ({
  mortgageType,
  monthhlyRepayment,
  currencySymbol,
  totalInterest,
}) => {
  return (
    <section className="flex-1 bg-slate900 text-white p-10 md:rounded-e-3xl md:rounded-bl-[6rem] relative z-10">
      <h1 className="text-left font-bold text-xl">Your Results</h1>
      <p className="text-left opacity-70 text-sm leading-relaxed pt-5">
        Your results are shown based on the information you provided. To adjust
        the results, edit the form and click 'calculate payments' again
      </p>
      <div className="bg-slatedeep shadow-md rounded-md mt-10 text-left">
        <hr className="border-none rounded-tl-md rounded-tr-md h-1 bg-lime" />
        <div className="p-5">
          <div className="text-sm opacity-70">Your monthly repayments</div>
          <div className="text-4xl font-bold pt-3 text-lime">
            {monthhlyRepayment !== "" &&
              currencySymbol === "£" &&
              `${currencySymbol}${Number(monthhlyRepayment).toLocaleString(
                "en-US"
              )}`}
            {monthhlyRepayment !== "" &&
              (currencySymbol === "$" ||
                currencySymbol === "€" ||
                currencySymbol === "₦") &&
              `${currencySymbol}${(
                Number(monthhlyRepayment) * 100
              ).toLocaleString("en-US")}`}
          </div>
        </div>
        <hr className="m-4" />
        <div className="mt-4 p-5">
          <div className="text-sm opacity-70">
            Total you'll repay over the term
          </div>
          <div className="text-white text-lg font-bold pt-2">£539,222</div>
        </div>
      </div>
    </section>
  );
};

export default ResultsCompleted;
