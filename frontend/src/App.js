import React, {useState} from 'react';
import './App.css';
// import AppBar from './components/Appbar';
// import Student from './components/Student';
import { Login } from "./Login";
import { Register } from "./Register";
import { Homepage } from "./Homepage";
import { Profile } from './Profile';
import {CreateProfile} from './CreateProfile'
import { Search } from './Search';
import {NotFound} from './NotFound'
import { EditProfile } from './EditProfile';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App(){
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formname) => {
    setCurrentForm(formname)
  }


  return(
    <Router>
      <Routes>
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/profile/create" element={<CreateProfile/>} />
        <Route exact path="/profile/edit" element={<EditProfile/>} />
        <Route exact path="/profile/search" element={<Search/>} />
        <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <AppBar/>
//       <Student/>
//     </div>
//   );
// }

export default App;
