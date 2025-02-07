// import { ILLUSTRATION_EMPTY } from "../constants/index";
import ResultsCompleted from "./ResultsCompleted";

const Results = () => {
  return (
    <section className="flex-1 bg-slate900 text-white p-10 md:rounded-e-3xl md:rounded-bl-[6rem] relative z-10">
      {/* <img
        className="mx-auto mt-[20%]"
        src={ILLUSTRATION_EMPTY}
        alt="Calculator Icon"
      />
      <h1 className="text-xl text-center font-bold">Results shown here</h1>
      <p className="text-center opacity-70 text-sm leading-relaxed pt-5">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p> */}
      <ResultsCompleted />
    </section>
  );
};

export default Results;
