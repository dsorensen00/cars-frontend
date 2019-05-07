import React from 'react';
import Forums from './Components/Forums'
import Home from './Pages/Home'
import ForSale from './Components/ForSale'
import Videos from './Components/Videos'
import Help from './Components/Help'
import './App.css';
import Routing from './Components/Routing'
import Feedback from './Components/Feedback';


function App() {
  return (
    <>
    <Routing />
 
   <footer>
    <Feedback />  
   </footer>
     
    </>
  );
}

export default App;
