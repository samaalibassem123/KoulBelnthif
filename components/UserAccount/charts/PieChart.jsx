"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { ChartDataAchived } from "../../../data/data";
export default function PieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.Chart) {
        chartRef.current.Chart.destroy();
      }
    }
    const context = chartRef.current.getContext("2d");
    const newChart = new Chart(context, {
      type: "doughnut",

      data: {
        labels: ["Fat per g", "Carbs per g", "Proteins per g"],
        datasets: [
          {
            labels: "Info",
            data: ChartDataAchived,
            backgroundColor: ["#4169e1", "#F36619", "#EEF4ED"],
            borderColor: "black",
          },
        ],
      },

      options: {
        responsive: true,
      },
    });

    chartRef.current.Chart = newChart;
  }, []);

  return (
    <div className="lg:w-[50%] lg:h-[50%]  ">
      <canvas ref={chartRef} />
    </div>
  );
}
