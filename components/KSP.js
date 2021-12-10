import { FireIcon, BeakerIcon, LightBulbIcon  } from "@heroicons/react/outline";

export default function KSP() {
  return (
    <div className="grid justify-around max-w-5xl grid-flow-row gap-10 md:grid-flow-col justify-items-center md:gap-0">
      <div className="grid w-11/12 grid-flow-row gap-3 p-4 bg-gray-800 rounded-lg shadow-xl justify-items-start shadow-indigo-300/5">
        <div className="grid items-center grid-flow-col">
          <div className="flex items-center justify-center w-12 h-12 mr-2 text-white rounded-md bg-gradient-to-t from-indigo-500 to-indigo-400">
            <FireIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white">Eyes on the prize</h3>
        </div>
        <div>
          <p className="mt-2 text-base text-gray-400">
            With a decade of experience, I know how to navigate uncertainty and
            get meaningful things done.
          </p>
          <p className="mt-2 text-base text-gray-400">
            No fluff or bullshit. Real talk and results.
          </p>
        </div>
      </div>
      <div className="grid w-11/12 grid-flow-row gap-3 p-4 bg-gray-800 rounded-lg shadow-xl justify-items-start shadow-indigo-300/5">
        <div className="grid items-center grid-flow-col">
          <div className="flex items-center justify-center w-12 h-12 mr-2 text-white rounded-md bg-gradient-to-t from-indigo-500 to-indigo-400">
            <BeakerIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white">
            Growth as a mindset
          </h3>
        </div>
        <div>
          <p className="mt-2 text-base text-gray-400">
            It's easy to <em>hack</em> and <em>hustle</em> your way to short
            term wins. That ain't me.
            <br />
          </p>
          <p className="mt-2 text-base text-gray-400">
            I bring scalable and sustainable growth systems as engines to power
            your product.
          </p>
        </div>
      </div>
      <div className="grid w-11/12 grid-flow-row gap-3 p-4 bg-gray-800 rounded-lg shadow-xl justify-items-start shadow-indigo-300/5">
        <div className="grid items-center grid-flow-col">
          <div className="flex items-center justify-center w-12 h-12 mr-2 text-white rounded-md bg-gradient-to-t from-indigo-500 to-indigo-400">
            <LightBulbIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium leading-6 text-white">
            Great ideas, non-stop
          </h3>
        </div>
        <div>
          <p className="mt-2 text-base text-gray-400">
            From tools, to systems, to automations, and the synergies between
            them all.
          </p>
          <p className="mt-2 text-base text-gray-400">
            Let me add some turbo to support your team.
          </p>
        </div>
      </div>
    </div>
  );
}
