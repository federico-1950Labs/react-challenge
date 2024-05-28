import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface UsersTableProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, onDelete }) => {
  return (
    <div className="overflow-x-auto pb-20">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map(user => (
            <tr key={user.id} className="block md:table-row">
              <td className="block md:table-cell px-6 py-4 whitespace-nowrap before:content-['Name:'] md:before:content-none before:block before:font-medium before:uppercase">{user.name}</td>
              <td className="block md:table-cell px-6 py-4 whitespace-nowrap before:content-['Email:'] md:before:content-none before:block before:font-medium before:uppercase">{user.email}</td>
              <td className="block md:table-cell px-6 py-4 whitespace-nowrap before:content-['Username:'] md:before:content-none before:block before:font-medium before:uppercase">{user.username}</td>
              <td className="block md:table-cell px-6 py-4 whitespace-nowrap before:content-['Actions:'] md:before:content-none before:block before:font-medium before:uppercase">
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-gray-400 hover:text-gray-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
