import Gameloft from "../elements/logos/Gameloft";
import LANDR from "../elements/logos/LANDR";
import LocalLogic from "../elements/logos/LocalLogic";

export default function Logos() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white text-center pb-8">
        Over a decade of experience at companies like
      </h2>
      <div className="grid grid-flow-row md:grid-flow-col justify-center justify-items-center items-center gap-8 md:gap-12">
        <Gameloft />
        <LANDR />
        <LocalLogic />
      </div>
    </div>
  );
}
