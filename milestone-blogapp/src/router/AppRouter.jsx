import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="newblog" element={<PrivateRouter />}>
          <Route path="" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
