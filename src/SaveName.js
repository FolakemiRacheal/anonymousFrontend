// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const SaveName = () => {
//   const { userId } = useParams();
//   const [savedName, setSavedName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:2450/api/v1/user/save-name/${userId}`, { savedName });
//       alert('Name submitted anonymously!');
//       setSavedName('');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Submission failed');
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl mt-10">
//       <h2 className="text-xl font-bold mb-4">Submit Name</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="What name did you save them as?"
//           value={savedName}
//           onChange={(e) => setSavedName(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SaveName;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Inline styles with bluish color palette
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f1f8fc', // Light blue background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bb6', // Bluish color for heading
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #a3c9e2', // Light blue border
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007bb6', // Focus border color
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bb6', // Primary blue color
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#005f87', // Darker blue for hover effect
  },
};

const SaveName = () => {
  const { userId } = useParams();
  const [savedName, setSavedName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://anonoymouscontactsaver.onrender.com/api/v1/user/saveName/${userId}`, { savedName });
      alert('Name submitted anonymously!');
      setSavedName(''); // Clear the input after submission
    } catch (err) {
      console.error('Error submitting name:', err);  // Log the full error to console for more details
      alert(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Submit Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What name did you save them as?"
            value={savedName}
            onChange={(e) => setSavedName(e.target.value)}
            style={{
              ...styles.input,
              ...(savedName.trim() && styles.inputFocus), // Focus effect
            }}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#005f87')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bb6')}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SaveName;
