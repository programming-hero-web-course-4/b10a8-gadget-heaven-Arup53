import Heading from "../components/Heading";
import StatisticsDisplay from "../components/StatisticsDisplay";

function Statistics() {
  return (
    <div>
      <Heading title={"Statistics"} type="statistics" />

      <div className="min-h-[70vh] my-12">
        <StatisticsDisplay />
      </div>
    </div>
  );
}

export default Statistics;
