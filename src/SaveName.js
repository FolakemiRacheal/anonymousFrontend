
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

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
//   const { userId } = useParams(); // Extract userId from the URL
//   const [savedName, setSavedName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!savedName.trim()) {
//       alert("Please enter a name.");
//       return;
//     }

//     try {
//       await axios.post(
//         `https://anonoymouscontactsaver.onrender.com/api/v1/user/saveName/${userId}`,
//         { savedName }
//       );

//       alert('Name submitted anonymously!');
//       setSavedName('');
//     } catch (err) {
//       console.error('Error submitting name:', err);
//       alert(err.response?.data?.message || 'Submission failed');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Submit Name</h2>
        
//         {/* 📝 Instructional Message */}
//         <p style={{ marginBottom: "10px", color: "#555", textAlign: "center" }}>
//           What name do you have this person saved as in your contacts?
//         </p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="e.g. Ada Mechanic, Big Bro, Pastor Mike"
//             value={savedName}
//             onChange={(e) => setSavedName(e.target.value)}
//             style={{
//               ...styles.input,
//               ...(savedName.trim() && styles.inputFocus),
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




//   const formLink = "https://docs.google.com/forms/d/1E4zh294VmrIYZbRvAUlyZMy5GMGDIPrpmzVmFdOmOz0/edit"; // Replace with your actual Google Form link

//   return (
//     <div>
//       <h1>Welcome to the Anonymous Name Saver</h1>
//       {/* Your existing form or content */}
      
//       {/* Link to Google Form */}
//       <a href={formLink} target="_blank" rel="noopener noreferrer">
//         Give us your feedback!
//       </a>
//     </div>
//   );

// };







// export default SaveName;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
  const { userId } = useParams(); // Extract userId from the URL
  const [savedName, setSavedName] = useState('');
  const formLink = "https://docs.google.com/forms/d/1E4zh294VmrIYZbRvAUlyZMy5GMGDIPrpmzVmFdOmOz0/edit"; // Replace with your actual Google Form link

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!savedName.trim()) {
      alert("Please enter a name.");
      return;
    }

    try {
      await axios.post(
        `https://anonoymouscontactsaver.onrender.com/api/v1/user/saveName/${userId}`,
        { savedName }
      );

      alert('Name submitted anonymously!');
      setSavedName('');
    } catch (err) {
      console.error('Error submitting name:', err);
      alert(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Submit Name</h2>

        {/* 📝 Instructional Message */}
        <p style={{ marginBottom: "10px", color: "#555", textAlign: "center" }}>
          What name do you have this person saved as in your contacts?
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. Ada Mechanic, Big Bro, Pastor Mike"
            value={savedName}
            onChange={(e) => setSavedName(e.target.value)}
            style={{
              ...styles.input,
              ...(savedName.trim() && styles.inputFocus),
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

        {/* Link to Google Form */}
        <a href={formLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: "20px", display: "inline-block", color: "#007bb6", fontSize: "16px" }}>
          Give us your feedback!
        </a>
      </div>
    </div>
  );
};

export default SaveName;
