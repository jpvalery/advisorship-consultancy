import Logos from "../components/Logos";
import CTA from "../elements/CTA/Advisorship";

export default function Advisorship() {
  return (
    <div className="grid grid-flow-row py-24 mx-auto justify-items-center">
      <h1 className="text-base font-semibold tracking-wide text-center uppercase text-advisor-500">
        Advisorship
      </h1>
      <p className="mt-2 font-serif text-5xl font-bold tracking-tight text-center md:text-6xl [text-shadow:0_-0.2rem_12rem_rgba(52,211,153,0.33)]">
        Field-tested experience to support your company
      </p>
      <div className="py-8 prose prose-xl text-center prose-a:text-advisor-500 text-gray-50">
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
