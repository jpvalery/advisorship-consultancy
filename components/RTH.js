import NextLink from "next/link";

export default function RTH() {
  return (
    <NextLink href="/">
      <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500 mx-auto">
        Go back
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
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </button>
    </NextLink>
  );
}
