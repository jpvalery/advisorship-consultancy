import NextLink from "next/link";

export default function CTA() {
  return (
    <div className="py-4">
      <a href="https://contact.jpvalery.me/advisorship">
        <button className="inline-flex items-center px-4 py-2 mx-auto text-base font-medium text-white border border-transparent shadow-sm rounded-md bg-advisor-600 hover:bg-advisor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-advisor-500">
          Get me as advisor
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
