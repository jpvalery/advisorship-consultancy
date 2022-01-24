import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function CTA() {
  return (
    <div className="py-4">
      <a href="https://contact.jpvalery.me/consultancy">
        <button className="mx-auto inline-flex items-center rounded-md border border-transparent bg-consultant-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-consultant-700 focus:outline-none focus:ring-2 focus:ring-consultant-500 focus:ring-offset-2">
          Hire me
          <ArrowNarrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
        </button>
      </a>
    </div>
  );
}
