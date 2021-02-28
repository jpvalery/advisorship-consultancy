import NextLink from "next/link";

export default function Questions() {
  return (
    <div className="w-full mx-auto bg-gray-800 rounded-lg p-12 flex flex-col gap-6 md:flex-row md:gap-20">
      <div className="md:pr-6 flex-grow">
        <h2 className="text-3xl font-extrabold text-white pb-4">Questions?</h2>
        <p className="text-lg">
          If you can't find your answer in the FAQ, let's get in touch and
          figure it out.
        </p>
      </div>
      <div>
        <div className="grid grid-rows-2 gap-4">
          <NextLink href="/FAQ">
            <button className="w-full inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500">
              Read the FAQ
              <svg
                class="ml-3 -mr-1 h-5 w-5"
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
          <a href="https://contact.jpvalery.me">
            <button
              type="button"
              className="w-full inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-cta-500 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Get in touch
              <svg
                class="ml-3 -mr-1 h-5 w-5"
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
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
