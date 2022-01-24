import Logos from "../components/Logos";
import CTA from "../elements/CTA/Advisorship";

export default function Advisorship() {
  return (
    <div className="mx-auto grid grid-flow-row justify-items-center py-24">
      <h1 className="text-center text-base font-semibold uppercase tracking-wide text-advisor-500">
        Advisorship
      </h1>
      <p className="mt-2 text-center font-serif text-5xl font-bold tracking-tight [text-shadow:0_-0.2rem_12rem_rgba(52,211,153,0.33)] md:text-6xl">
        Field-tested experience to support your company
      </p>
      <div className="prose prose-xl py-8 text-center text-gray-50 prose-a:text-advisor-500">
        <p>
          According to{" "}
          <a href="https://go.forrester.com/blogs/the-revenue-operations-charter-is-born/">
            Forrester
          </a>
          , companies with aligned revenue operations{" "}
          <b>grow 12 to 15 times faster</b> than their competition and are{" "}
          <b>34% more profitable</b>.
        </p>
        <p>
          I'm a growth polymath who honed his skills at companies of various
          stages and sizes, and in multiple industries.
        </p>
        <p>
          Getting me as an advisor for your startup is adding an involved and
          passionate coach to your team to help achieve sustainable growth.
        </p>
      </div>
      <CTA />
      <Logos />
    </div>
  );
}
