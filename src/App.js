/** @format */

// import logo from './logo.svg';
// import './App.css';
// import HomePage from './components/Homepage';
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
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
//       </header> */}
//       <HomePage/>
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import "./plasmic-host.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your other routes... */}
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
        <Route path="/plasmic-test" element={<HomePage />} />
        {/* <Route path="/" element={<HelloWorld/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
