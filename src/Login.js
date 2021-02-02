import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router';
import app  from './Base.js';
import { AuthContext } from './Auth.js';


const Login =({ history}) =>{
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try{
                await app 
                .auth()
                .signIpWithEmailAndPassword(email.value, password.value);
                history.push("/");

            }catch(error){
                alert(error);
            }
        },
        [history]
    );
    const { currentUser } = useContext(AuthContext);
    if(currentUser){
        return <Redirect to="/" />;

    }

    return(
        <div>
            <h1>Log In</h1>
            <from onsubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="email" />

                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="password" />

                </label>
                <button type="submit " >login In</button>
            </from>
        </div>
    );
};


export default withRouter(Loginin);