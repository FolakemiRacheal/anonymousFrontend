import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GetNames = () => {
  const { userId } = useParams();
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2450/api/v1/user/getNames/${userId}`)
      .then(res => setNames(res.data.data))
      .catch(err => console.error(err));
  }, [userId]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md mt-10 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Names Saved for User</h2>
      {names.length > 0 ? (
        <ul className="list-disc pl-5">
          {names.map((name, index) => (
            <li key={index}>{name.savedName}</li>
          ))}
        </ul>
      ) : (
        <p>No names found for this user.</p>
      )}
    </div>
  );
};

export default GetNames;
