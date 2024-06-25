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
import AddTask from './components/admin/addtask';
import Feedback from './components/admin/feedback';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import StudentFeedback from './components/student/feedback';
import StdProfile from './components/student/profile';
import AddStudent from './components/admin/addStudent'
import TaskInfo from './components/admin/allTask';
import Attendance from './components/student/attendance';
import Marks from './components/student/marks';

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
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/Contactus' element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="admin" element={<Admin />} >
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='teacherinfo' element={<TeacherInfo/>}/>
          <Route path='addtask' element={<AddTask/>}/>
          <Route path='alltask' element={<TaskInfo />}/>
          <Route path="teacher/:id" element={<TeacherProfile />} />
          <Route path='studentinfo' element={<StudentInfo/>}/>
          <Route path='addstudent' element={<AddStudent />} />
          <Route path="student/:id" element={<StudentProfile />} />
          <Route path='feedback' element={<Feedback/>} />
        </Route>
        <Route path="student" element={<Student />} >
        <Route path='profile' element={<StdProfile/>} />
        <Route path='feedback' element={<StudentFeedback/>} />
        <Route path='marks' element={<Marks/>} />
        <Route path='attendance' element={<Attendance/>} />
        </Route>
        <Route path="teacher" element={<Teacher />} >
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
