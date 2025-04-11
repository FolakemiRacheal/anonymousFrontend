



// // export default AnonymousSaver;
// import React, { useState } from "react";
// import axios from "axios";

// // Inline styles with bluish color palette (no card design)
// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#eaf2f8", // Light blue background
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//   },
//   heading: {
//     fontSize: "32px",
//     fontWeight: "bold",
//     color: "#007bb6", // Bluish color for heading
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   subHeading: {
//     fontSize: "16px",
//     textAlign: "center",
//     color: "#555", // Darker gray for subheading
//     marginBottom: "30px",
//   },
//   input: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "12px",
//     marginBottom: "20px",
//     borderRadius: "8px",
//     border: "1px solid #a3c9e2", // Light blue border
//     fontSize: "14px",
//     outline: "none",
//     transition: "border-color 0.3s ease",
//   },
//   inputFocus: {
//     borderColor: "#007bb6", // Blue focus effect
//   },
//   button: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "12px",
//     backgroundColor: "#007bb6", // Primary blue color
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   buttonHover: {
//     backgroundColor: "#005f87", // Darker blue for hover effect
//   },
//   resultBox: {
//     marginTop: "30px",
//     padding: "15px",
//     backgroundColor: "#f0f7fc", // Light blue background for result box
//     borderRadius: "8px",
//     border: "1px solid #a3c9e2", // Light blue border for the result box
//     textAlign: "center",
//   },
//   resultText: {
//     fontSize: "14px",
//     color: "#555", // Dark gray for result text
//   },
//   resultLink: {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#007bb6", // Blue color for the link
//     textDecoration: "underline",
//     wordBreak: "break-all",
//   },
// };

// const AnonymousSaver = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [uniqueLink, setUniqueLink] = useState("");

//   const handleSubmit = async () => {
//     if (phoneNumber.trim() === "") {
//       alert("Please enter your phone number.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:2450/api/v1/user/signUp",
//         { phoneNumber },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       // Generate a link to the frontend route using the returned user _id
//       const frontendLink = `http://localhost:3000/save-name/${response.data.data._id}`;
//       setUniqueLink(frontendLink);
//     } catch (error) {
//       alert("Failed to generate link. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>
//         Curious how people saved your contact? 🤔
//       </h1>
//       <p style={styles.subHeading}>
//         Enter your phone number and generate your anonymous link
//       </p>

//       <input
//         type="text"
//         placeholder="Enter your phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         style={{
//           ...styles.input,
//           ...(phoneNumber.trim() && styles.inputFocus), // Focus style
//         }}
//       />

//       <button
//         onClick={handleSubmit}
//         style={styles.button}
//         onMouseOver={(e) => (e.target.style.backgroundColor = "#005f87")}
//         onMouseOut={(e) => (e.target.style.backgroundColor = "#007bb6")}
//       >
//         Generate Link
//       </button>

//       {uniqueLink && (
//         <div style={styles.resultBox}>
//           <p style={styles.resultText}>Your unique link:</p>
//           <a
//             href={uniqueLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.resultLink}
//           >
//             {uniqueLink}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnonymousSaver;



// import React, { useState } from "react";
// import {useEffect, useState } from "react";
// import axios from "axios";

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#eaf2f8",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//   },
//   heading: {
//     fontSize: "32px",
//     fontWeight: "bold",
//     color: "#007bb6",
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   subHeading: {
//     fontSize: "16px",
//     textAlign: "center",
//     color: "#555",
//     marginBottom: "30px",
//   },
//   input: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "12px",
//     marginBottom: "20px",
//     borderRadius: "8px",
//     border: "1px solid #a3c9e2",
//     fontSize: "14px",
//     outline: "none",
//     transition: "border-color 0.3s ease",
//   },
//   inputFocus: {
//     borderColor: "#007bb6",
//   },
//   button: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "12px",
//     backgroundColor: "#007bb6",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   resultBox: {
//     marginTop: "30px",
//     padding: "15px",
//     backgroundColor: "#f0f7fc",
//     borderRadius: "8px",
//     border: "1px solid #a3c9e2",
//     textAlign: "center",
//   },
//   resultText: {
//     fontSize: "14px",
//     color: "#555",
//   },
//   resultLink: {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#007bb6",
//     textDecoration: "underline",
//     wordBreak: "break-all",
//   },
// };

// const AnonymousSaver = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [uniqueLink, setUniqueLink] = useState("");
//   const [submissions, setSubmissions] = useState([]);
//   const [showSubmissions, setShowSubmissions] = useState(false);

//   const validateNigerianPhoneNumber = (number) => {
//     const cleaned = number.replace(/\D/g, "");
//     return /^0\d{10}$/.test(cleaned);
//   };

//   const handleSubmit = async () => {
//     if (!validateNigerianPhoneNumber(phoneNumber)) {
//       alert("Please enter a valid Nigerian phone number (11 digits starting with 0)");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://anonoymouscontactsaver.onrender.com/api/v1/user/signUp",
//         { phoneNumber },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const frontendLink = `https://anonoymouscontactsaver.vercel.app/save-name/${response.data.data.uniqueLink}`;
//       setUniqueLink(frontendLink);
//     } catch (error) {
//       alert("Failed to generate link. Please try again.");
//     }
//   };

//   // Define state for mostCommon and count
//   const [mostCommon, setMostCommon] = useState(null);
//   const [count, setCount] = useState(0);

//   // Fetching most common name
//   useEffect(() => {
//     if (!uniqueLink) return; // Don't run if uniqueLink is not set

//     const userId = uniqueLink.split("/").pop(); // Extract userId from the uniqueLink
//     if (!userId) return; // Ensure userId is valid

//     fetch(`https://anonoymouscontactsaver.onrender.com/api/v1/user/getSubmittedData/${userId}`)
//       .then(res => res.json())
//       .then(data => {
//         setMostCommon(data.mostCommonName);  // Update the mostCommon state
//         setCount(data.count);  // Update the count state
//       })
//       .catch((err) => console.error("Failed to fetch most common name:", err));
//   }, [uniqueLink]); // Runs when uniqueLink changes

  

//   const fetchSubmissions = async () => {
//     const userId = uniqueLink.split("/").pop();
//     try {
//       const response = await axios.get(
//         `https://anonoymouscontactsaver.onrender.com/api/v1/user/getNames/${userId}`
//       );
//       setSubmissions(response.data.data);
//       setShowSubmissions(true);
//     } catch (error) {
//       alert("Error fetching submissions.");
//     }
//   };

//   const handleViewSubmissions = () => {
//     if (!uniqueLink) return; // Ensure there's a link before proceeding
//     fetchSubmissions();
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Curious how people saved your contact? 🤔</h1>
//       <p style={styles.subHeading}>
//         Enter your phone number and generate your anonymous link
//       </p>

//       <input
//         type="text"
//         placeholder="Enter your phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         style={{
//           ...styles.input,
//           ...(phoneNumber.trim() && styles.inputFocus),
//         }}
//       />

//       <button
//         onClick={handleSubmit}
//         style={styles.button}
//         onMouseOver={(e) => (e.target.style.backgroundColor = "#005f87")}
//         onMouseOut={(e) => (e.target.style.backgroundColor = "#007bb6")}
//       >
//         Generate Link
//       </button>

//       {uniqueLink && (
//         <>
//           <div style={styles.resultBox}>
//             <p style={styles.resultText}>Your unique link:</p>
//             <a
//               href={uniqueLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={styles.resultLink}
//             >
//               {uniqueLink}
//             </a>
//           </div>

//           <button
//             onClick={handleViewSubmissions}
//             style={{ ...styles.button, marginTop: "15px" }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#005f87")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#007bb6")}
//           >
//             View Submissions
//           </button>
//         </>
//       )}

//       {showSubmissions && (
//         <div style={styles.resultBox}>
//           <h3 style={styles.resultText}>People saved you as:</h3>
//           {submissions.length > 0 ? (
//             submissions.map((item, idx) => (
//               <p key={idx} style={{ margin: "5px 0", color: "#333" }}>
//                 • {item.savedName}
//               </p>
//             ))
//           ) : (
//             <p style={{ color: "#999" }}>No submissions yet.</p>
//           )}
//         </div>
//       )}

//       {mostCommon && (
//         <div style={styles.resultBox}>
//           <h3 style={styles.resultText}>Most Common Name:</h3>
//           <p style={{ fontWeight: "bold", color: "#007bb6" }}>
//             {mostCommon} ({count} {count === 1 ? "time" : "times"})
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnonymousSaver;






import { useEffect, useState } from "react";
import axios from "axios";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#eaf2f8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#007bb6",
    textAlign: "center",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "16px",
    textAlign: "center",
    color: "#555",
    marginBottom: "30px",
  },
  input: {
    width: "100%",
    maxWidth: "400px",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #a3c9e2",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007bb6",
  },
  button: {
    width: "100%",
    maxWidth: "400px",
    padding: "12px",
    backgroundColor: "#007bb6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  resultBox: {
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#f0f7fc",
    borderRadius: "8px",
    border: "1px solid #a3c9e2",
    textAlign: "center",
  },
  resultText: {
    fontSize: "14px",
    color: "#555",
  },
  resultLink: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007bb6",
    textDecoration: "underline",
    wordBreak: "break-all",
  },
};

const AnonymousSaver = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [uniqueLink, setUniqueLink] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [mostCommon, setMostCommon] = useState(null);
  const [count, setCount] = useState(0);

  const validateNigerianPhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, "");
    return /^0\d{10}$/.test(cleaned);
  };

  // const handleSubmit = async () => {
  //   if (!validateNigerianPhoneNumber(phoneNumber)) {
  //     alert("Please enter a valid Nigerian phone number (11 digits starting with 0)");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://anonoymouscontactsaver.onrender.com/api/v1/user/signUp",
  //       { phoneNumber },
  //       { headers: { "Content-Type": "application/json" } }
  //     );

  //     const userId = data.data.uniqueLink;

  //     const frontendLink = `https://anonoymouscontactsaver.vercel.app/save-name/${userId}`;
  //     setUniqueLink(frontendLink);
  //   } catch (error) {
  //     alert("Failed to generate link. Please try again.");
  //   }
  // };



  const handleSubmit = async () => {
    if (!validateNigerianPhoneNumber(phoneNumber)) {
      alert("Please enter a valid Nigerian phone number (11 digits starting with 0)");
      return;
    }
  
    try {
      // Send phone number to the backend to generate the unique user link
      const response = await axios.post(
        "https://anonoymouscontactsaver.onrender.com/api/v1/user/signUp",
        { phoneNumber },
        { headers: { "Content-Type": "application/json" } }
      );
  
      // Ensure the response contains the necessary data
      const userId = response.data.data.uniqueLink;  // Correct access to the response data
      
  
      // Construct the unique frontend link based on userId
      const frontendLink = `https://anonoymouscontactsaver.vercel.app/save-name/${userId}`;
      
      // Update the state with the generated link
      setUniqueLink(frontendLink);
    } catch (error) {
      alert("Failed to generate link. Please try again.");
    }
  };
  
  // Fetch most common name and count
  useEffect(() => {
    if (!uniqueLink) return; // Don't run if uniqueLink is not set

    const userId = uniqueLink.split("/").pop(); // Extract userId from the uniqueLink
    if (!userId) return; // Ensure userId is valid

    axios
      .get(`https://anonoymouscontactsaver.onrender.com/api/v1/user/getSubmittedData/${userId}`)
      .then((res) => {
        if (res.data && res.data.mostCommonName) {
          setMostCommon(res.data.mostCommonName);  // Update mostCommon state
          setCount(res.data.count);  // Update count state
        } else {
          console.error("No most common name found in response");
        }
      })
      .catch((err) => console.error("Failed to fetch most common name:", err));
  }, [uniqueLink]); // Runs when uniqueLink changes

  const fetchSubmissions = async () => {
    const userId = uniqueLink.split("/").pop();
    try {
      const response = await axios.get(
        `https://anonoymouscontactsaver.onrender.com/api/v1/user/getNames/${userId}`
      );
      setSubmissions(response.data.data);
      setShowSubmissions(true);
    } catch (error) {
      alert("Error fetching submissions.");
    }
  };

  const handleViewSubmissions = () => {
    if (!uniqueLink) return; // Ensure there's a link before proceeding
    fetchSubmissions();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Curious how people saved your contact? 🤔</h1>
      <p style={styles.subHeading}>
        Enter your phone number and generate your anonymous link
      </p>

      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{
          ...styles.input,
          ...(phoneNumber.trim() && styles.inputFocus),
        }}
      />

      <button
        onClick={handleSubmit}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#005f87")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bb6")}
      >
        Generate Link
      </button>

      {uniqueLink && (
        <>
          <div style={styles.resultBox}>
            <p style={styles.resultText}>Your unique link:</p>
            <a
              href={uniqueLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.resultLink}
            >
              {uniqueLink}
            </a>
          </div>

          <button
            onClick={handleViewSubmissions}
            style={{ ...styles.button, marginTop: "15px" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#005f87")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bb6")}
          >
            View Submissions
          </button>
        </>
      )}

      {showSubmissions && (
        <div style={styles.resultBox}>
          <h3 style={styles.resultText}>People saved you as:</h3>
          {submissions.length > 0 ? (
            submissions.map((item, idx) => (
              <p key={idx} style={{ margin: "5px 0", color: "#333" }}>
                • {item.savedName}
              </p>
            ))
          ) : (
            <p style={{ color: "#999" }}>No submissions yet.</p>
          )}
        </div>
      )}

      {mostCommon && (
        <div style={styles.resultBox}>
          <h3 style={styles.resultText}>Most Common Name:</h3>
          <p style={{ fontWeight: "bold", color: "#007bb6" }}>
            {mostCommon} ({count} {count === 1 ? "time" : "times"})
          </p>
        </div>
      )}
    </div>
  );
};

export default AnonymousSaver;
