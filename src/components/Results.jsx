import { ILLUSTRATION_EMPTY } from "../constants/index";

const Results = () => {
  return (
    <section className="flex-1 bg-slate-900 text-white p-10 md:rounded-e-3xl md:rounded-bl-[6rem] relative z-10">
      <img className="mx-auto" src={ILLUSTRATION_EMPTY} alt="Calculator Icon" />
      <h2 className="text-text-center font-bold">Results shown here</h2>
      <p className="text-center opacity-70 text-sm leading-relaxed pt-5">
        Your results are shown based on the information you provided. To adjust
        the results, edit the form and click 'calculate payments' again
      </p>
    </section>
  );
};

export default Results;
