import Tools from "../components/Tools";
import CTA from "../elements/CTA/Consultancy";

export default function Consultancy() {
  return (
    <div className="grid grid-flow-row py-24 mx-auto justify-items-center">
      <h1 className="text-base font-semibold tracking-wide text-center uppercase text-consultant-500">
        Consultancy
      </h1>
      <p className="mt-2 font-serif text-5xl font-bold tracking-tight text-center md:text-6xl [text-shadow:0_-0.2rem_12rem_rgba(167,139,250,0.33)]">
        <span className="line-through">Harder</span>, Better, Faster, Stronger
        <br />
        results
      </p>
      <div className="py-8 prose prose-xl text-center prose-a:text-consultant-500 text-gray-50">
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
