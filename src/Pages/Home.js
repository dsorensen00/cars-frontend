import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'


export default() => {
    return(
    <div className='container-fluid'>
    <button><a href="google.com">HOME</a></button>
        <h1>My Dream Garage</h1>
        <Login/>
        <Navbar/>
        <div>
            <div className="row">    
                <section name="Featured Article" className="col border">
                    <h1>ARTICLE</h1>
                </section>
                <section name="About" className="col border">
                    <h1>ABOUT</h1>
                </section>
            </div>
            <section name="Featured Vehicles" className="row justify-content-around border">
                <h1>FEATURED VEHICLES</h1>
            </section>
        </div>
    </div>
    );
}