import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddWidgetForm from "./Addwidget";
import { deleteWidget } from "../redux/widgetSlice";
import WidgetCard from "./WidgetCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widgets);
  const searchQuery = useSelector((state) => state.search); 

  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleDelete = (category, id) => {
    dispatch(deleteWidget({ category, id }));
  };

  const handleAdd = (category) => {
    setActiveCategory(category);
    setShowForm(true);
  };

  return (
    <div className="p-6 bg-gray-100 ">
      <div className="grid md:grid-cols-1 lg:grid-cols-1  gap-6">
        {Object.keys(categories).map((category) => {
          const filteredWidgets = categories[category].filter(widget =>
            widget.widgetName.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <WidgetCard
              key={category}
              category={category}
              widgets={filteredWidgets}
              onDelete={handleDelete}
              onAdd={handleAdd}
            />
          );
        })}

      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <AddWidgetForm
            onClose={() => setShowForm(false)}
            defaultCategory={activeCategory}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
