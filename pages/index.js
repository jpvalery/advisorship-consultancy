import NextLink from "next/link";
import HomeSplit from "../components/HomeSplit";
import KSP from "../components/KSP";
import Logos from "../components/Logos";
import Questions from "../components/Questions";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div className="md:gap-30 mx-auto grid gap-20 py-24">
      <div className="py-8">
        <h1 className="pb-8 text-center font-serif text-5xl font-bold [text-shadow:0_-0.2rem_12rem_rgba(236,72,153,0.5)] md:text-6xl">
          Sustainable growth for
          <br />
          early-stage SaaS
        </h1>
        <p className="text-center text-lg">
          How does growing 15 times faster than your competition and being 34%
          more profitable sound?
          <a
            href="https://go.forrester.com/blogs/the-revenue-operations-charter-is-born/"
            className="ml-1 align-top text-sm font-bold text-cta-500"
          >
            *
          </a>
        </p>
      </div>
      <HomeSplit />
      <KSP />
      <Logos />
      <Questions />
      <Tools />
    </div>
  );
}
