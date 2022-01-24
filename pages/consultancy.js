import Tools from "../components/Tools";
import CTA from "../elements/CTA/Consultancy";

export default function Consultancy() {
  return (
    <div className="mx-auto grid grid-flow-row justify-items-center py-24">
      <h1 className="text-center text-base font-semibold uppercase tracking-wide text-consultant-500">
        Consultancy
      </h1>
      <p className="mt-2 text-center font-serif text-5xl font-bold tracking-tight [text-shadow:0_-0.2rem_12rem_rgba(167,139,250,0.33)] md:text-6xl">
        <span className="line-through">Harder</span>, Better, Faster, Stronger
        <br />
        results
      </p>
      <div className="prose prose-xl py-8 text-center text-gray-50 prose-a:text-consultant-500">
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
          Get the leanest yet highest-performing operations stack your company
          deserve and need with none of the overhead
        </p>
      </div>
      <CTA />
      <Tools />
    </div>
  );
}
