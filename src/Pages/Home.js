import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'


export default() => {
    return(
    <div className='App'>
        <h1>My Dream Garage</h1>
        <Login/>
        <Navbar/>
     </div>
    );
}