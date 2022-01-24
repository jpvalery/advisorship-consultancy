import NextLink from "next/link";
import { ArrowNarrowRightIcon, InboxInIcon } from "@heroicons/react/outline";

export default function Questions() {
  return (
    <div className="mx-auto flex w-full flex-col gap-6 rounded-lg bg-gray-800 p-12 md:flex-row md:gap-12">
      <div className="flex-grow md:pr-6">
        <h2 className="pb-4 text-3xl font-extrabold text-white">Questions?</h2>
        <p className="text-lg">
          If you can't find your answer in the FAQ, let's get in touch and
          figure it out.
        </p>
      </div>
      <div>
        <div className="grid grid-rows-2 gap-4">
          <NextLink href="/FAQ">
            <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-cta-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-cta-500 focus:ring-offset-2">
              Read the FAQ
              <ArrowNarrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
            </button>
          </NextLink>
          <a href="https://contact.jpvalery.me">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-cta-500 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Get in touch
              <InboxInIcon className="ml-3 -mr-1 h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
