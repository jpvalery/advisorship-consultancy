import NextLink from "next/link";
import DividerV from "../elements/DividerV";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function HomeSplit() {
  return (
    <div className="grid max-w-5xl grid-cols-1 items-center justify-items-center md:grid-cols-3">
      <div className="gap grid grid-rows-3 items-center justify-items-center md:justify-items-start md:gap-4">
        <h1 className="font-serif text-4xl font-bold [text-shadow:0_-0.1rem_6rem_rgba(52,211,153,0.9)]">
          Advisorship
        </h1>
        <div className="grid-rows grid max-w-md gap-2">
          <p className="text-center md:text-left">
            Need expertise and guidance on how to nurture and grow your
            audience?
          </p>
          <p className="text-center md:text-left">
            Curious about optimization of your funnel or your processes?
          </p>
          <p className="text-center md:text-left">
            Let me join your team as an advisor
          </p>
        </div>
        <NextLink href="/advisorship">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-advisor-600 px-4 py-2 text-base font-medium text-white shadow-lg shadow-advisor-400/20 hover:bg-advisor-700 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-advisor-500 focus:ring-offset-2"
          >
            Learn more
            <ArrowNarrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
          </button>
        </NextLink>
      </div>

      <DividerV />

      <div className="gap grid grid-rows-3 items-center justify-items-center md:justify-items-end md:gap-4">
        <h1 className="font-serif text-4xl font-bold [text-shadow:0_-0.1rem_6rem_rgba(167,139,250,0.9)]">
          Consultancy
        </h1>
        <div className="grid-rows grid max-w-md gap-2">
          <p className="text-center md:text-right">
            Need help with building or improving your GrowthOps/RevOps stack?
          </p>
          <p className="text-center md:text-right">
            Looking to automate and optimize processes and workflows?
          </p>
          <p className="text-center md:text-right">
            Hire me for short contract-based work
          </p>
        </div>
        <NextLink href="/consultancy">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-consultant-600 px-4 py-2 text-base font-medium text-white shadow-lg shadow-consultant-400/20 hover:bg-consultant-700 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-consultant-500 focus:ring-offset-2"
          >
            Learn more
            <ArrowNarrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
          </button>
        </NextLink>
      </div>
    </div>
  );
}
