import React, { useState } from "react";

const AddUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "Admin" },
    { id: 3, name: "Bob Brown", email: "bobbrown@example.com", role: "User" },
  ]);

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => (user.id === id ? { ...user, role: newRole } : user)));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center items-center p-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Manage Users</h2>

          {/* User Table */}
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="border border-gray-300 rounded-lg p-2 text-gray-800"
                    >
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => alert(`Edit User: ${user.name}`)} // Replace with edit functionality
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => alert(`Delete User: ${user.name}`)} // Replace with delete functionality
                      className="bg-red-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-red-600 transition duration-200"
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
    </div>
  );
};

export default AddUsers;
