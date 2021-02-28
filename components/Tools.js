import Airtable from "../elements/logos/tools/Airtable";
import Amplitude from "../elements/logos/tools/Amplitude";
import Autocode from "../elements/logos/tools/Autocode";
import Customerio from "../elements/logos/tools/Customerio";
import GA from "../elements/logos/tools/GA";
import Github from "../elements/logos/tools/Github";
import Hotjar from "../elements/logos/tools/Hotjar";
import Intercom from "../elements/logos/tools/Intercom";
import Nextjs from "../elements/logos/tools/Nextjs";
import Paddle from "../elements/logos/tools/Paddle";
import Parabola from "../elements/logos/tools/Parabola";
import Pipedrive from "../elements/logos/tools/Pipedrive";
import Segment from "../elements/logos/tools/Segment";
import Shopify from "../elements/logos/tools/Shopify";
import Vitally from "../elements/logos/tools/Vitally";
import Webhooks from "../elements/logos/tools/Webhooks";
import Zendesk from "../elements/logos/tools/Zendesk";
import Zapier from "../elements/logos/tools/Zapier";

export default function Tools() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-xl uppercase font-extrabold text-gray-300 text-center pb-8">
        Expertise across martech and growth stacks
      </h2>
      <div className="text-white grid grid-cols-6 justify-around justify-items-center items-center gap-8 px-2 md:px-24 mx-auto">
        <div className="col-span-3 md:pr-8 justify-self-end">
          <Segment />
        </div>
        <div className="col-span-3 md:pl-8 justify-self-start">
          <Customerio />
        </div>

        <div className="col-span-2">
          <GA />
        </div>
        <div className="col-span-2">
          <Amplitude />
        </div>
        <div className="col-span-2">
          <Hotjar />
        </div>

        <div className="col-span-2">
          <Zapier />
        </div>
        <div className="col-span-2">
          <Airtable />
        </div>
        <div className="col-span-2">
          <Autocode />
        </div>

        <div className="col-span-2">
          <Pipedrive />
        </div>
        <div className="col-span-2">
          <Zendesk />
        </div>
        <div className="col-span-2">
          <div className="flex flex-inline items-center">
            <Vitally />
            <span className="ml-4 font-semibold text-xl">Vitally</span>
          </div>
        </div>

        <div className="col-span-2">
          <Nextjs />
        </div>
        <div className="col-span-1">
          <Github />
        </div>
        <div className="col-span-1">
          <Parabola />
        </div>
        <div className="col-span-1">
          <Webhooks />
        </div>

        <div className="col-span-2">
          <Intercom />
        </div>
        <div className="col-span-2">
          <Shopify />
        </div>
        <div className="col-span-2">
          <Paddle />
        </div>
      </div>
    </div>
  );
}
