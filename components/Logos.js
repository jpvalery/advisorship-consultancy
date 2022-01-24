import Customerio from "../elements/logos/companies/Customerio";
import Gameloft from "../elements/logos/companies/Gameloft";
import LANDR from "../elements/logos/companies/LANDR";

export default function Logos() {
  return (
    <div className="mx-auto max-w-5xl py-8">
      <h2 className="pb-8 text-center text-xl font-extrabold uppercase text-gray-50">
        Over a decade of experience at companies like
      </h2>
      <div className="grid grid-flow-row items-center justify-center justify-items-center gap-8 text-gray-400 md:grid-flow-col md:gap-12">
        <Customerio />
        <Gameloft />
        <LANDR />
      </div>
    </div>
  );
}
