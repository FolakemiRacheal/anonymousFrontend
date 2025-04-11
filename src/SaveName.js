

// // export default SaveName;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// // Inline styles with bluish color palette
// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#f1f8fc', // Light blue background
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//   },
//   formContainer: {
//     backgroundColor: '#ffffff',
//     padding: '30px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '400px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#007bb6', // Bluish color for heading
//     marginBottom: '20px',
//   },
//   input: {
//     width: '100%',
//     padding: '12px',
//     marginBottom: '20px',
//     borderRadius: '8px',
//     border: '1px solid #a3c9e2', // Light blue border
//     fontSize: '14px',
//     outline: 'none',
//     transition: 'border-color 0.3s ease',
//   },
//   inputFocus: {
//     borderColor: '#007bb6', // Focus border color
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#007bb6', // Primary blue color
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transition: 'background-color 0.3s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#005f87', // Darker blue for hover effect
//   },
// };

// const SaveName = () => {
//   const { userId } = useParams();
//   const [savedName, setSavedName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`https://anonoymouscontactsaver.onrender.com/api/v1/user/saveName/${userId}`, { savedName });
//       alert('Name submitted anonymously!');
//       setSavedName(''); // Clear the input after submission
//     } catch (err) {
//       console.error('Error submitting name:', err);  // Log the full error to console for more details
//       alert(err.response?.data?.message || 'Submission failed');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Submit Name</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="What name did you save them as?"
//             value={savedName}
//             onChange={(e) => setSavedName(e.target.value)}
//             style={{
//               ...styles.input,
//               ...(savedName.trim() && styles.inputFocus), // Focus effect
//             }}
//           />
//           <button
//             type="submit"
//             style={styles.button}
//             onMouseOver={(e) => (e.target.style.backgroundColor = '#005f87')}
//             onMouseOut={(e) => (e.target.style.backgroundColor = '#007bb6')}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SaveName;




import React, { useState, useEffect } from 'react';
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
  const { userId } = useParams(); // Get userId from the URL params
  const [savedName, setSavedName] = useState(''); // To store the name user saves for the contact
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(''); // To store any error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!savedName.trim()) {
      setError('Please enter a valid name.');
      return;
    }
  
    setLoading(true); // Set loading to true while waiting for the response
    try {
      // Post the saved name to the backend using the userId
      await axios.post(
        `https://anonoymouscontactsaver.onrender.com/api/v1/user/saveName/${userId}`,
        { savedName },
        { headers: { "Content-Type": "application/json" } }
      );
  
      // If successful, show alert and clear the input
      alert('Name submitted anonymously!');
      setSavedName('');
      setError('');
    } catch (err) {
      console.error('Error submitting name:', err); // Log the error for debugging
      setError(err.response?.data?.message || 'Submission failed, please try again.'); // Set error message
    } finally {
      setLoading(false); // Set loading to false once the API call completes
    }
  };
  

  useEffect(() => {
    // Optional: You can fetch additional user data or handle any pre-submit actions here.
  }, []);

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
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>
    </div>
  );
};

export default SaveName;
