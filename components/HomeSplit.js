import NextLink from "next/link";
import DividerV from "../elements/DividerV";

export default function HomeSplit() {
  return (
    <div className="items-center max-w-5xl grid grid-cols-1 md:grid-cols-3 justify-items-center">
      <div className="items-center grid grid-rows-3 justify-items-center md:justify-items-start gap md:gap-4">
        <h1 className="font-serif text-4xl font-bold">Advisorship</h1>
        <div className="max-w-md grid grid-rows gap-2">
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
            className="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent shadow-sm rounded-md bg-advisor-600 hover:bg-advisor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-advisor-500"
          >
            Learn more
            <svg
              className="w-5 h-5 ml-3 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </NextLink>
      </div>

      <DividerV />

      <div className="items-center grid grid-rows-3 justify-items-center md:justify-items-end gap md:gap-4">
        <h1 className="font-serif text-4xl font-bold">Consultancy</h1>
        <div className="max-w-md grid grid-rows gap-2">
          <p className="text-center md:text-right">
            Need help with building or improving your GrowthOps/RevOps stack?
          </p>
          <p className="text-center md:text-right">
            Looking to automate and optimize processes and workflows?
          </p>
          <p className="text-center md:text-right">
            Hire me for short-term contract-based work
          </p>
        </div>
        <NextLink href="/consultancy">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent shadow-sm rounded-md bg-consultant-600 hover:bg-consultant-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-consultant-500"
          >
            Learn more
            <svg
              className="w-5 h-5 ml-3 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </NextLink>
      </div>
    </div>
  );
}
