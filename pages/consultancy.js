import Tools from "../components/Tools";
import CTA from "../elements/CTA/Consultancy";

export default function Consultancy() {
  return (
    <div className="mx-auto py-24 grid grid-flow-row justify-items-center">
      <h1 class="text-base text-consultant-500 font-semibold tracking-wide uppercase text-center">
        Consultancy
      </h1>
      <p class="mt-2 tracking-tight font-serif font-bold text-5xl md:text-6xl text-center">
        <span className="line-through">Harder</span>, Better, Faster, Stronger
        <br />
        results
      </p>
      <div className="prose prose-xl prose-consultant text-center text-gray-50 py-8">
        <p>According to <a href="https://go.forrester.com/blogs/the-revenue-operations-charter-is-born/">Forrester</a>, companies with aligned revenue operations <b>grow 12 to 15 times faster</b> than their competition and are <b>34% more profitable</b>.</p>
        <p>Get the leanest yet highest-performing operations stack your company deserve and need with none of the overhead</p>
      </div>
      <CTA />
      <Tools />
    </div>
  );
}
