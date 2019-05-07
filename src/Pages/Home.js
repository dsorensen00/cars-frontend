import React from 'react'
import Navbar from '../Components/Navbar'
import LoginButton from '../Components/LoginButton'



export default() => {
    return(
    <div className='container-fluid'>
        <div className="row justify-content-right">    
            <h1 className="col text-center">My Dream Garage</h1>
            <button onClick={()=>window.location.href = "login"}>LOGIN</button>
        </div>
        <Navbar className="row"/>
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