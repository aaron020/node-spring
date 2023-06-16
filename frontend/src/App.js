import React, {useState} from 'react';
import './App.css';
// import AppBar from './components/Appbar';
// import Student from './components/Student';
import { Login } from "./Login";
import { Register } from "./Register";



function App(){
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formname) => {
    setCurrentForm(formname)
  }


  return(
    <div className='App'>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      
    </div>
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
