import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/widgetSlice";

const AddWidgetForm = ({ onClose, defaultCategory }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [category, setCategory] = useState(defaultCategory || "CSPM Excutive Dashboard");
  const dispatch = useDispatch();

  const categories = ["CSPM Excutive Dashboard", "CWPP Dashboard", "Registry Scan"];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget({
      category,
      widgetName,
      widgetText,
      id: Date.now(),
    }));
    setWidgetName("");
    setWidgetText("");
    setCategory(defaultCategory || "CSPM Excutive Dashboard");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-72 md:w-96 bg-white border border-gray-300 rounded-lg shadow-lg p-4 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">CSPM Executive Dashboard</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <label className="text-sm font-medium mb-1">Widget Name</label>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required />

          <label className="text-sm font-medium mb-1">Widget Text</label>
          <textarea
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            rows={3}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required />

          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" >
            Add Widget
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetForm;
