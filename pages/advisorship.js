import Logos from "../components/Logos";
import CTA from "../elements/CTA/Advisorship";

export default function Advisorship() {
  return (
    <div className="py-24 mx-auto grid grid-flow-row justify-items-center">
      <h1 className="text-base font-semibold tracking-wide text-center uppercase text-advisor-500">
        Advisorship
      </h1>
      <p className="mt-2 font-serif text-5xl font-bold tracking-tight text-center md:text-6xl">
        Field-tested experience to support your company
      </p>
      <div className="py-8 text-center prose prose-xl prose-advisor text-gray-50">
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
