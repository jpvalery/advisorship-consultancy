import NextLink from "next/link";
import DividerV from "../elements/DividerV";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function HomeSplit() {
  return (
    <div className="grid items-center max-w-5xl grid-cols-1 md:grid-cols-3 justify-items-center">
      <div className="grid items-center grid-rows-3 justify-items-center md:justify-items-start gap md:gap-4">
        <h1 className="font-serif text-4xl font-bold">Advisorship</h1>
        <div className="grid max-w-md gap-2 grid-rows">
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
            className="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-lg shadow-advisor-400/20 hover:shadow-none bg-advisor-600 hover:bg-advisor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-advisor-500"
          >
            Learn more
            <ArrowNarrowRightIcon className="w-5 h-5 ml-3 -mr-1" />
          </button>
        </NextLink>
      </div>

      <DividerV />

      <div className="grid items-center grid-rows-3 justify-items-center md:justify-items-end gap md:gap-4">
        <h1 className="font-serif text-4xl font-bold">Consultancy</h1>
        <div className="grid max-w-md gap-2 grid-rows">
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
            className="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-lg shadow-consultant-400/20 hover:shadow-none bg-consultant-600 hover:bg-consultant-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-consultant-500"
          >
            Learn more
            <ArrowNarrowRightIcon className="w-5 h-5 ml-3 -mr-1" />
          </button>
        </NextLink>
      </div>
    </div>
  );
}
