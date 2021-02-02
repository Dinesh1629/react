import React from 'react';
import app from './Base';

const Home = () =>{
    return(
        <>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>SignOut</button>
        </>
    );
};


export default Home;