import NextLink from "next/link";

export default function RTH() {
  return (
    <NextLink href="/">
      <button className="inline-flex items-center px-4 py-2 mx-auto text-base font-medium text-white border border-transparent shadow-sm rounded-md bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500">
        Go back
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
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </button>
    </NextLink>
  );
}
