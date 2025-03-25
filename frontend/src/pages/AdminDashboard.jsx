import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <div className="flex min-h-screen absolute left-0">
      {/* Sidebar */}
      <div className="w-64 bg-cyan-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setSelectedPage("dashboard")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPage === "dashboard" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Dashboard
            </button>
          </li>
         <NavLink to="/user"> <li>
            <button
              onClick={() => setSelectedPage("users")}
              className={`w-full text-left px-4 py-2 rounded mt-4 ${
                selectedPage === "users" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Users
            </button>
          </li>
          </NavLink>
          <li>
            <button
              onClick={() => setSelectedPage("products")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPage === "products" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedPage("orders")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPage === "orders" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Orders
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedPage("payments")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPage === "payments" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Payments
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedPage("pages")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPage === "pages" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Pages
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedPage("reports")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPage === "reports" ? "bg-cyan-500" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              Reports
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-red-500 rounded hover:bg-red-600">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      {/* <div className="flex-1 p-6">
        {selectedPage === "dashboard" && <h2 className="text-2xl">Dashboard Content</h2>}
        {selectedPage === "users" && <h2 className="text-2xl">Users Management</h2>}
        {selectedPage === "products" && <h2 className="text-2xl">Product List</h2>}
        {selectedPage === "orders" && <h2 className="text-2xl">Order History</h2>}
        {selectedPage === "payments" && <h2 className="text-2xl">Payment Details</h2>}
        {selectedPage === "pages" && <h2 className="text-2xl">Pages Settings</h2>}
        {selectedPage === "reports" && <h2 className="text-2xl">Reports & Analytics</h2>}
      </div> */}
    </div>
  );
};

export default AdminDashboard;
