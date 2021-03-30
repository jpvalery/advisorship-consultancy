import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function CTA() {
  return (
    <div className="py-4">
      <a href="https://contact.jpvalery.me/advisorship">
        <button className="inline-flex items-center px-4 py-2 mx-auto text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-advisor-600 hover:bg-advisor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-advisor-500">
          Get me as advisor
          <ArrowNarrowRightIcon className="w-5 h-5 ml-3 -mr-1" />
        </button>
      </a>
    </div>
  );
}
