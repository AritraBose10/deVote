import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./admin";
import AdminLogin from "./adminlogin";
import "./assets/app.css";
import Landing from "./landing";
import Login from "./login";
import Voting from "./voting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
