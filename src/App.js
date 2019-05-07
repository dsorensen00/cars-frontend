import React from 'react';
import Forums from './Components/Forums'
import Home from './Pages/Home'
import ForSale from './Components/ForSale'
import Videos from './Components/Videos'
import Help from './Components/Help'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feedback from './Components/Feedback';


function App() {
  return (
    <div className="App">
    <Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/forums" component={Forums}/>
    <Route path="/forsale" component={ForSale}/> 
    <Route path="/videos" component={Videos}/>
    <Route path="/help" component={Help}/>
  </div>
</Router>
   <footer>
   <Feedback/>  
   </footer>
     
    </div>
  );
}

export default App;
