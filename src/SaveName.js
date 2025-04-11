

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
  const { userId } = useParams();  // Extract userId from the URL
  const [savedName, setSavedName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // If the saved name is empty, show an alert
    if (!savedName.trim()) {
      alert("Please enter a name.");
      return;
    }

    try {
      // Send POST request to save the name with the userId
      await axios.post(`https://anonoymouscontactsaver.onrender.com/api/v1/user/saveName/${userId}`, { savedName });

      alert('Name submitted anonymously!');
      setSavedName(''); // Clear the input after submission
    } catch (err) {
      console.error('Error submitting name:', err); // Log the full error to console for more details
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
