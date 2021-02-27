import NextLink from "next/link";
import HomeSplit from "../components/HomeSplit";
import KSP from "../components/KSP";
import Logos from "../components/Logos";
import Questions from "../components/Questions";

export default function Home() {
  return (
    <div className="mx-auto py-24 grid gap-20 md:gap-40">
      <h1 className="font-serif font-bold text-5xl md:text-6xl text-center py-8">
        Sustainable growth for
        <br />
        early-stage SaaS
      </h1>
      <HomeSplit />
      <KSP />
      <Logos />
      <Questions />
    </div>
  );
}
