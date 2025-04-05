import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:2450/api/v1/user/getSavedContactWithUser/${id}`)
      .then(res => setContact(res.data.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md mt-10 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Saved Contact Details</h2>
      {contact ? (
        <div>
          <p><strong>Name:</strong> {contact.savedName}</p>
          <p><strong>User:</strong> {contact.user?.phoneNumber}</p>
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default ContactDetails;
