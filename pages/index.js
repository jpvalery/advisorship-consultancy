import NextLink from "next/link";
import HomeSplit from "../components/HomeSplit";
import KSP from "../components/KSP";
import Logos from "../components/Logos";
import Questions from "../components/Questions";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div className="py-24 mx-auto grid gap-20 md:gap-30">
      <div className="py-8">
        <h1 className="pb-8 font-serif text-5xl font-bold text-center md:text-6xl">
          Sustainable growth for
          <br />
          early-stage SaaS
        </h1>
        <p className="text-lg text-center">
          How does growing 15 times faster than your competition and being 34%
          more profitable sound?
          <a
            href="https://go.forrester.com/blogs/the-revenue-operations-charter-is-born/"
            className="ml-1 text-sm font-bold align-top text-cta-500"
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
