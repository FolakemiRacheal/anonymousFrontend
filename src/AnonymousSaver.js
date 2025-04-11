
import React, { useState } from "react";
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

  //     const frontendLink = `https://anonoymouscontactsaver.vercel.app/save-name/${response.data.data._id}`;
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
      const response = await axios.post(
        "https://anonoymouscontactsaver.onrender.com/api/v1/user/signUp",
        { phoneNumber },
        { headers: { "Content-Type": "application/json" } }
      );
  
      const frontendLink = response.data.data.uniqueLink; // Correct this part
      setUniqueLink(frontendLink);
    } catch (error) {
      alert("Failed to generate link. Please try again.");
    }
  };
  


  const handleViewSubmissions = async () => {
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
    </div>
  );
};

export default AnonymousSaver;








