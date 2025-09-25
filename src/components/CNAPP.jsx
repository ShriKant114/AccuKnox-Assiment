import React, { useState } from "react";
import { Plus, RefreshCw, Clock, ChevronDown, MoreVertical } from "lucide-react";
import AddWidgetForm from "./Addwidget";

const DashboardHeader = ({ onAddWidget }) => {
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Last 2 days");
  const dateOptions = ["Last 2 days", "Last 7 days"];

  return (
    <header className="w-full bg-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center p-3 md:p-5 gap-3 md:gap-0">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
        CNAPP Dashboard
      </h2>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 relative">
        <div className="relative bg-white">
          <button
            onClick={() => setWidgetOpen(!widgetOpen)}
            className="flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-gray-700 text-sm md:text-base font-medium shadow-sm hover:bg-gray-50 transition">
            <Plus className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" />
            Add Widget
          </button>

          {widgetOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
              <AddWidgetForm
                onClose={() => setWidgetOpen(false)}
                onAddWidget={onAddWidget}
              />
            </div>
          )}
        </div>

        <button
          onClick={() => window.location.reload()}
          className="flex items-center p-1.5 sm:p-2 border bg-white border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition"
        >
          <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button className="flex items-center p-1.5 sm:p-2 border bg-white border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition">
          <MoreVertical className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className="relative bg-white">
          <button
            onClick={() => setDateOpen(!dateOpen)}
            className="flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-medium text-sm md:text-base shadow-sm hover:bg-gray-50 transition"
          >
            <Clock className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" />
            <span>{selectedDate}</span>
            <ChevronDown className="ml-1 sm:ml-2 text-gray-500 w-4 h-4 md:w-5 md:h-5" />
          </button>

          {dateOpen && (
            <ul className="absolute mt-1 right-0 min-w-[150px] bg-white border border-gray-300 rounded-lg shadow-md z-10">
              {dateOptions.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setSelectedDate(opt);
                    setDateOpen(false);
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
