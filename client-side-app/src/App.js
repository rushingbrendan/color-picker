import React from 'react';
import HeaderBar from './components/HeaderBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ColorPicker from './components/ColorPicker.js';
//import './css/bootstrap.css';



function App() {
  return (
    <div> 
    <Router>
    
      <HeaderBar></HeaderBar>

      <Route exact={true} path="/dashboard" render={() => (
        <div>
          <div>
            test dashboad
          </div>



        </div>
        
      )} />  

      <Route exact={true} path="/color" render={() => (
        <ColorPicker></ColorPicker>
        
      )} />   

        
      
      </Router>
    </div>
  );
}

export default App;
