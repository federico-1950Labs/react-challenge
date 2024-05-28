'use client';

import { useEffect, useState } from 'react';
import UserTable from './components/UsersTable';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { fetchUsers } from './services/userService';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 5;

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUsers(users);
      setFilteredUsers(users);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [query, users]);

  const handleDelete = (id: number) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };
  
  const indexOfLastUser = currentPage * usersPerPage + usersPerPage;
  const indexOfFirstUser = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  
  const paginate = ({ selected }: { selected: number }) => setCurrentPage(selected);

  return (
    <div className="container mx-auto px-4 pb-20 md:pb-40">
      <h1 className="text-2xl font-bold my-4">Users</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <UserTable users={currentUsers} onDelete={handleDelete} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
