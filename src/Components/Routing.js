import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Forums from './Forums'
import Home from '../Pages/Home'
import ForSale from './ForSale'
import Videos from './Videos'
import Help from './Help'
import LoginScreen from '../Pages/LoginScreen'
import NewUser from '../Pages/NewUser'
import ForgotPassword from '../Pages/ForgotPassword';
import PasswordChange from '../Pages/PasswordChange';

export default () => {

    return(
<Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/forums" component={Forums}/>
        <Route path="/forsale" component={ForSale}/> 
        <Route path="/videos" component={Videos}/>
        <Route path="/help" component={Help}/>
        <Route path="/login" component={LoginScreen}/>
        <Route path="/newuser" component={NewUser}/>
        <Route path="/emailforgot" component={ForgotPassword}/>
        <Route path="/reset" component={PasswordChange}/>
        
    </Switch>
</Router>
    )}