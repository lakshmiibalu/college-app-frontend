import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/studentlogin' element={<StudentLogin/>}/>
        <Route path='/add' element={<AddStudent/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
