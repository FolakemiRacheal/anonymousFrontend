// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnonymousSaver from "./AnonymousSaver";
import SaveName from './SaveName';
import AllUsers from './AllUsers';
import GetNames from './GetNames';
import ContactDetails from './ContactDetails';
import FeedbackLink from "./FeedbackLink";

function App() {
  return (
    <Router>

<div>
      <Routes>
        <Route path="/" element={<AnonymousSaver />} />
        <Route path="/save-name/:userId" element={<SaveName />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/get-names" element={<GetNames />} />
        <Route path="/contact-details" element={<ContactDetails />} />
      </Routes>
      {/* Global Footer */}
      <footer style={{ backgroundColor: '#f1f8fc', padding: '10px', textAlign: 'center', fontWeight:"bold" }}>
          <FeedbackLink />
        </footer>
      </div>
    </Router>
  );

}

export default App;
