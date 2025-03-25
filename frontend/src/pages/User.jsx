import React, { useState } from "react";
import AdminDashboard from "./adminDashboard";

const User = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Ali", email: "ali@example.com" },
        { id: 2, name: "Ayan", email: "ayan@example.com" },
    ]);
    const [newUser, setNewUser] = useState({ name: "", email: "" });
    const [editingUser, setEditingUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [nextId, setNextId] = useState(3); // ID-ga xiga

    // Create: Add new user with unique ID
    const addUser = () => {
        if (newUser.name && newUser.email) {
            setUsers([...users, { id: nextId, ...newUser }]);
            setNewUser({ name: "", email: "" });
            setNextId(nextId + 1); // Kordhi ID-ga xiga
            setModalOpen(false);
        }
    };

    // Update: Open modal for editing
    const editUser = (user) => {
        setEditingUser(user);
        setModalOpen(true);
    };

    // Save updated user
    const saveUser = () => {
        setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
        setEditingUser(null);
        setModalOpen(false);
    };

    // Delete: Remove user
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
        <div className="min-h-screen bg-cyan-700 text-white p-6 font-serif">
            <div className="max-w-4xl mx-auto bg-cyan-600 shadow-lg rounded-xl p-6">
                <h1 className="text-3xl font-bold text-center mb-6">User Dashboard</h1>

                {/* Add User Button */}
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg mb-4"
                >
                    + Add User
                </button>

                {/* User List */}
                <div className="bg-cyan-700 p-4 rounded-lg shadow">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-cyan-900 text-gray-200 uppercase text-sm">
                                <th className="border p-3 text-left">ID</th>
                                <th className="border p-3 text-left">Name</th>
                                <th className="border p-3 text-left">Email</th>
                                <th className="border p-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-cyan-600 transition">
                                    <td className="border p-3">{user.id}</td>
                                    <td className="border p-3">{user.name}</td>
                                    <td className="border p-3">{user.email}</td>
                                    <td className="border p-3 text-center">
                                        <button
                                            onClick={() => editUser(user)}
                                            className="bg-cyan-400 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-cyan-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-cyan-800 p-6 rounded-lg w-96 shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">
                            {editingUser ? "Edit User" : "Add User"}
                        </h2>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={editingUser ? editingUser.name : newUser.name}
                            onChange={(e) => {
                                editingUser
                                    ? setEditingUser({ ...editingUser, name: e.target.value })
                                    : setNewUser({ ...newUser, name: e.target.value });
                            }}
                            className="w-full p-3 mb-3 bg-gray-700 text-white border border-gray-600 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={editingUser ? editingUser.email : newUser.email}
                            onChange={(e) => {
                                editingUser
                                    ? setEditingUser({ ...editingUser, email: e.target.value })
                                    : setNewUser({ ...newUser, email: e.target.value });
                            }}
                            className="w-full p-3 mb-3 bg-gray-700 text-white border border-gray-600 rounded"
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={editingUser ? saveUser : addUser}
                                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
                            >
                                {editingUser ? "Save Changes" : "Add User"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
    
};

export default User;
