export default function KSP() {
  return (
    <div className="grid grid-flow-row md:grid-flow-col justify-items-center justify-around gap-10 md:gap-0">
      <div className="w-11/12 p-4 rounded-lg bg-gray-800 grid grid-flow-row gap-3 justify-items-start">
        <div className="grid grid-flow-col items-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-t from-indigo-500 to-indigo-400 text-white mr-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white">Eyes on the prize</h3>
        </div>
        <div>
          <p className="mt-2 text-base text-gray-400">
            With a decade of experience, we know how to navigate uncertainty and
            get meaningful things done.
          </p>
          <p className="mt-2 text-base text-gray-400">
            No fluff or bullshit. Real talk and results.
          </p>
        </div>
      </div>
      <div className="w-11/12 p-4 rounded-lg bg-gray-800 grid grid-flow-row gap-3 justify-items-start">
        <div className="grid grid-flow-col items-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-t from-indigo-500 to-indigo-400 text-white mr-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white">
            Growth as a mindset
          </h3>
        </div>
        <div>
          <p className="mt-2 text-base text-gray-400">
            It's easy to <em>hack</em> and <em>hustle</em> your way to short
            term wins. That ain't us.
            <br />
          </p>
          <p className="mt-2 text-base text-gray-400">
            We bring scalable and sustainable growth systems as engines to power
            your product.
          </p>
        </div>
      </div>
      <div className="w-11/12 p-4 rounded-lg bg-gray-800 grid grid-flow-row gap-3 justify-items-start">
        <div className="grid grid-flow-col items-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-t from-indigo-500 to-indigo-400 text-white mr-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-white">
            Great ideas, non-stop
          </h3>
        </div>
        <div>
          <p className="mt-2 text-base text-gray-400">
            From tools, to systems, to automations, and the synergies between
            them all.
          </p>
          <p className="mt-2 text-base text-gray-400">
            Add some turbo to support your team.
          </p>
        </div>
      </div>
    </div>
  );
}
