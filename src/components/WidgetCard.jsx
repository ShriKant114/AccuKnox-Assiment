import React from "react";
import { CloudAccountsChart, CloudRiskPieChart } from "./Pi";

const WidgetCardItem = ({ widget, category, onDelete }) => (
  <div
    className="relative bg-gradient-to-br from-white to-gray-50 
               rounded-2xl w-full sm:w-[340px] md:w-[380px] lg:w-[420px]
               h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]
               shadow-lg hover:shadow-2xl hover:scale-105 
               transition-all duration-300 ease-in-out 
               flex flex-col justify-between p-6">
    <div>
      <h3 className="font-semibold text-gray-800 text-lg md:text-xl mb-2">
        {widget.widgetName}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-snug">
        {widget.widgetText}
      </p>
    </div>
    <button
      onClick={() => onDelete(category, widget.id)}
      className="absolute top-3 right-3 px-2 py-1 text-red-500 font-bold
                 text-sm rounded-md transition hover:bg-gray-100">✕</button>
  </div>
);

// Add Widget card
const AddWidgetCard = ({ onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white 
               rounded-2xl w-full sm:w-[340px] md:w-[380px] lg:w-[420px]
               h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]
               flex flex-col items-center justify-center 
               text-gray-500 hover:text-gray-700 
               hover:shadow-lg hover:scale-105 
               shadow-md transition-all duration-300">
    <p className="text-sm md:text-base font-medium px-5 py-3 bg-gray-100 rounded-md shadow-sm">+ Add Widget</p>
  </div>
);

const WidgetCard = ({ category, widgets, onDelete, onAdd }) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-black ml-3 mb-3">
        {category}
      </h2>

      <div className="flex flex-wrap gap-6 p-2">
        {/* Pie charts */}
        {category === "CSPM Excutive Dashboard" && <CloudAccountsChart />}
        {category === "CSPM Excutive Dashboard" && <CloudRiskPieChart />}

        {/*existing widgets */}
        {widgets.length > 0 &&
          widgets.map((widget) => (
            <WidgetCardItem
              key={widget.id}
              widget={widget}
              category={category}
              onDelete={onDelete}
            />
          ))}

        <AddWidgetCard onClick={() => onAdd(category)} />
      </div>
    </div>
  );
};

export default WidgetCard;
