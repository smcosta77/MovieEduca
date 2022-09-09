import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app-container">
      <ToastContainer autoClose={3000}/>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
