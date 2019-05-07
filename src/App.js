import React from 'react';

import './App.css';
import Routing from './Components/Routing'


import Feedback from './Components/Feedback';


function App() {
  return (
    <div className="App">
    <Routing/>
   <footer>
   <Feedback/>  
   </footer>
     
    </div>
  );
}

export default App;
