import NextLink from "next/link";
import HomeSplit from "../components/HomeSplit";
import KSP from "../components/KSP";
import Logos from "../components/Logos";
import Questions from "../components/Questions";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div className="mx-auto py-24 grid gap-20 md:gap-30">
      <div className="py-8">
        <h1 className="font-serif font-bold text-5xl md:text-6xl text-center pb-8">
          Sustainable growth for
          <br />
          early-stage SaaS
        </h1>
        <p className="text-center text-lg">
          How does growing 15 times faster than your competition and being 34%
          more profitable sound?
          <a
            href="https://go.forrester.com/blogs/the-revenue-operations-charter-is-born/"
            class="ml-1 align-top text-sm font-bold text-cta-500"
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
