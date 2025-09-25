import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Card style
const cardClasses = `
  bg-white rounded-2xl
  w-full sm:w-[340px] md:w-[380px] lg:w-[420px]
  h-[280px] sm:h-[220px] md:h-[240px] lg:h-[260px]     
  flex flex-col p-4 shadow-md
  transition-transform duration-300
  hover:scale-105
`;

const chartWrapperClasses = `flex-1 flex flex-row items-center justify-between`;

export const CloudAccountsChart = (category, widgets, onDelete, onAdd) => {
  const data = [
    { name: "Connected", value: 2, color: "#3B82F6" },
    { name: "Not Connected", value: 2, color: "#BFDBFE" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={cardClasses}>
      <h3 className="font-semibold text-gray-800 text-lg md:text-xl mb-2"> Cloud Accounts  </h3>

      <div className={chartWrapperClasses}>
        <div className="flex-1 relative h-full mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                dataKey="value"
                isAnimationActive={false}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-lg font-bold text-gray-800">{total}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 w-[140px] text-left">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">

              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }} />
              <span className="text-sm font-medium">
                {item.name}: {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CloudRiskPieChart = () => {
  const data = [
    { name: "Failed", value: 1689, color: "#EF4444" },
    { name: "Warning", value: 681, color: "#FACC15" },
    { name: "Passed", value: 7253, color: "#22C55E" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={cardClasses}>

      <h3 className="font-semibold text-gray-800 text-lg md:text-xl mb-2">
        Cloud Account Risk Assessment
      </h3>

      <div className={chartWrapperClasses}>

        <div className="flex-1 relative h-full mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                dataKey="value"
                isAnimationActive={false}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-lg font-bold text-gray-800">{total}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 w-[140px] text-left">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">

              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }} />
              <span className="text-sm font-medium">
                {item.name}: {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
