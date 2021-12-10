import NextLink from "next/link";
import { ArrowNarrowRightIcon, InboxInIcon } from "@heroicons/react/outline";

export default function Questions() {
  return (
    <div className="flex flex-col w-full gap-6 p-12 mx-auto bg-gray-800 rounded-lg md:flex-row md:gap-12">
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
            <button className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500">
              Read the FAQ
              <ArrowNarrowRightIcon className="w-5 h-5 ml-3 -mr-1" />
            </button>
          </NextLink>
          <a href="https://contact.jpvalery.me">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-2 text-base font-medium bg-white border border-transparent rounded-md shadow-sm text-cta-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Get in touch
              <InboxInIcon className="w-5 h-5 ml-3 -mr-1" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
