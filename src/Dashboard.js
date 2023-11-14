import React, { useState } from "react";
import { FiMenu, FiSettings, FiUsers } from "react-icons/fi"; // Import icons from react-icons

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-2xl font-semibold">Dashboard</span>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none lg:hidden"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Analytics
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Users
          </a>
          {/* Add more sidebar links */}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={toggleSidebar} className="text-gray-600 lg:hidden">
            <FiMenu className="text-2xl" />
          </button>
          <div className="flex items-center space-x-4">
            <FiUsers className="text-2xl" />
            <FiSettings className="text-2xl" />
          </div>
        </div>
        <div className="bg-white p-8 rounded shadow-md">
          {/* Your content goes here */}
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard!</h1>
          <p>Your content here...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
