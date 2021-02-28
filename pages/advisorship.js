import Logos from "../components/Logos";
import CTA from "../elements/CTA/Advisorship";

export default function Advisorship() {
  return (
    <div className="mx-auto py-24 grid grid-flow-row justify-items-center">
      <h1 class="text-base text-advisor-500 font-semibold tracking-wide uppercase text-center">
        Advisorship
      </h1>
      <p class="mt-2 tracking-tight font-serif font-bold text-5xl md:text-6xl text-center">
        Field-tested experience to support your company
      </p>
      <div className="prose prose-xl prose-advisor text-center text-gray-50 py-8">
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
