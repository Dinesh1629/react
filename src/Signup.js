// import React,  {useCallback} from 'react';
// import { withRouter } from 'react-router';

import React from 'react';
import app from './Base';


const Signup = ({ history }) =>{
    const handleSignup = useCallback{async event =>{
        event.preventDefault();
        const { email,password} =event.target.elements;
        try{
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value,password.value);
            history.push("/");
        }
        catch(error){
            alert(error);
        },
    
        [history]);
   render(
       
            <div>
            <h1>SignUp </h1>
            <form onSubmit = {handleSignUp}>
            <label>
            Email
            <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
            password
            <input name="Password" type="password" placeholder="password" />
            </label>
            </form>
            </div>
        );

        

    export default withRoute(Signup);


