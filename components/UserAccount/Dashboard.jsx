import React from "react";
import Chart from "chart.js/auto";
import Counters from "./Counters";

export default function Dashboard() {
  const Items = [
    { text: "Goal Calories", value: "2760", unit: "kaj" },
    { text: "Achived Calories", value: "1650", unit: "kaj" },
    { text: "Goal Proteins", value: "120", unit: "g" },
    { text: "Achived Proteins", value: "60", unit: "g" },
    { text: "Goal Carbs", value: "500", unit: "g" },
    { text: "Achived Carbs", value: "100", unit: "g" },
  ];

  return (
    <div className="flex items-center w-full">
      <div className="lg:p-10 p-10 grid md:grid-cols-2">
        {Items.map((item) => (
          <div className="flex flex-col items-center">
            <Counters
              key={item.text}
              text={item.text}
              value={item.value}
              unit={item.unit}
            />
            <hr className="w-[80%]" />
          </div>
        ))}
      </div>
    </div>
  );
}
