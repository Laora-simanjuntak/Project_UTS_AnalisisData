import "./index.css";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./components/Home";
import Materi from "./components/Materi";
import NotFound from "./components/NotFound";
import Login from './components/Login';
import Company from './components/Company';
import Kimia from './components/Kimia';
import ProfileUser from "./components/ProfileUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Company />}></Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/materi" element={<Materi />}></Route>
        <Route path="/kimia" element={<Kimia />}></Route>
        <Route path="/profile" element={<ProfileUser />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
