import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import CommentCard from "../components/blog/CommentCard";
import About from "../pages/About";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="blog" element={<PrivateRouter />}>
          <Route path="" element={<Login />} />
        </Route> */}
        <Route path="/addComment" element={<CommentCard />} />
        <Route path="blog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
