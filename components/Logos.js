import Customerio from "../elements/logos/companies/Customerio";
import Gameloft from "../elements/logos/companies/Gameloft";
import LANDR from "../elements/logos/companies/LANDR";

export default function Logos() {
  return (
    <div className="max-w-5xl py-8 mx-auto">
      <h2 className="pb-8 text-xl font-extrabold text-center uppercase text-gray-50">
        Over a decade of experience at companies like
      </h2>
      <div className="grid items-center justify-center grid-flow-row gap-8 text-gray-400 md:grid-flow-col justify-items-center md:gap-12">
        <Customerio />
        <Gameloft />
        <LANDR />
      </div>
    </div>
  );
}
