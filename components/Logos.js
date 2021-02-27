import Gameloft from "../logos/Gameloft";
import LANDR from "../logos/LANDR";
import LocalLogic from "../logos/LocalLogic";

export default function Logos() {
  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-extrabold text-white text-center pb-8">
        Over a decade of experience at companies like
      </h2>
      <div className="grid grid-flow-col justify-center items-center gap-12">
        <Gameloft />
        <LANDR />
        <LocalLogic />
      </div>
    </div>
  );
}
