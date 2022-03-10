

import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,

  Route,
 
} from "react-router-dom";
import { Switch } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light') //whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
    const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode has been enabled", "success");
        document.title = "TextUtils - DarkMode";
      }
      else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled", "success");
        document.title = "TextUtils - LightMode";
      }
    }

  

  return (
    <>
   <Router> 
    <Navbar title="TEXTUTILS" abouttext= "About TextUtils "  mode= {mode}  toggleMode={toggleMode} />
    <Alert alert ={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
         <About mode= {mode}/>
          </Route>
         
         
          <Route exact path="/">
        <TextForm showAlert={showAlert } heading="Enter the text to analyze below" mode= {mode}  />
          </Route>
       </Switch>
    
     </div>
   </Router>
    </>
  );
}

export default App;
