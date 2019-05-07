import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'


export default() => {
    return(
    <div className='App'>
        <h1>My Dream Garage</h1>
        <Login/>
        <Navbar/>
        <div className="row">
        
        <section name="Featured Article" className="col border" >
            <h1>Featured Article</h1>
        </section>
        <section name="About" className="col border">
            <h1>About</h1>
        </section>
       
        </div>
        <section name="Featured Vehicles" className="row border">
            <h1>Featured Vehicles</h1>
        </section>
     </div>
    );
}