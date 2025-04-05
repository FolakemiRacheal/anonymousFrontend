import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2450/api/v1/user/getAll')
      .then(res => setUsers(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="p-3 border rounded">
            Phone: {user.phoneNumber} <br />
            <a href={user.uniqueLink} className="text-blue-600">Visit Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
