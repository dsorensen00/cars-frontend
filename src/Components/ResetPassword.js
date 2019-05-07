import React from 'react'
import Navbar from './Navbar'


export default () => {
    

    return (
    <> 
        <h1>Reset Password</h1>
        <Navbar/>
            <form>
                <section>
                <input type="password" placeholder="New Password"/>
                </section>
                <section>
                <input type="password" placeholder="Confirm Pasword"/>
                </section>
                <small>Password must contain a capitol and a lower case letter, a number and a special symbol (*&%$#!?)</small><input type="submit" value="Submit"/>
            </form>
    
    
    
    
    </>
    )}
