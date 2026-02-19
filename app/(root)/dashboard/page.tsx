import React from "react";

function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Add many items to force scroll */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="bg-white p-4 mb-3 rounded-lg shadow">
          Content Box {i + 1}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
