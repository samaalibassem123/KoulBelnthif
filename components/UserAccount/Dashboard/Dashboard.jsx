import React from "react";
import Counters from "../Counters";
import { StatData } from "@/data/data";
import PieChart from "../charts/PieChart";
import Calories from "../../Calories";

export default function Dashboard() {
  return (
    <div className="flex lg:flex-row   flex-col-reverse items-center justify-center w-full">
      <div className="flex lg:hidden flex-col gap-5 items-center">
        <Calories />
        <hr className="w-[80%]" />
      </div>

      <div className=" p-5 grid md:grid-cols-3">
        {StatData.map((item) => (
          <div className="flex  flex-col items-center" key={item.id}>
            <Counters text={item.text} value={item.value} unit={item.unit} />
            <hr className="w-[80%]" />
          </div>
        ))}
      </div>
      <PieChart />
    </div>
  );
}
