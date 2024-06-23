import './App.css';
import { Route,Routes } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin'
import TeacherInfo from './components/admin/teacherinfo'
import StudentInfo from './components/admin/studentinfo'
import StudentProfile from './components/admin/studentProfile'
import TeacherProfile from './components/admin/teacherProfile'
import Dashboard from './components/admin/dashboard'
import NotFound from './components/404';
import Home from './pages/Home'
import ContactUs from './components/admin/conatctus';


function App() {

  // eslint-disable-next-line
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/Contactus' element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="admin" element={<Admin />} >
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='teacherinfo' element={<TeacherInfo/>}/>
          <Route path="teacher/:id" element={<TeacherProfile />} />
          <Route path='studentinfo' element={<StudentInfo/>}/>
          <Route path="student/:id" element={<StudentProfile />} />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
