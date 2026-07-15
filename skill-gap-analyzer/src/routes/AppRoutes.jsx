import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../pages/Student/Dashboard";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Profile from "../pages/Student/Profile";
import Resume from "../pages/Resume/Resume";
import AssessmentHome from "../pages/Student/AssessmentHome";
import AssessmentPage from "../pages/Student/AssessmentPage";
import AssessmentResult from "../pages/Student/AssessmentResult";
import Speaking from "../pages/Student/Speaking";
import CareerAnalysis from "../pages/Student/CareerAnalysis"; 
import Students from "../pages/Admin/Students";
import Questions from "../pages/Admin/Questions";
function AppRoutes() {
  return (
    <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/admin-login" element={<AdminLogin />} />

    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/assessment" element={<AssessmentHome/>} />
    <Route path="/assessment/:skill" element={<AssessmentPage />}/>
    <Route path="/assessment/result" element={<AssessmentResult />}/>
    <Route path="/speaking" element={<Speaking />} />
    <Route path="/career-analysis" element={<CareerAnalysis />} />
    <Route path="/admin/students" element={<Students />} />
    <Route path="/admin/questions" element={<Questions />} />
</Routes>
  );
}

export default AppRoutes;