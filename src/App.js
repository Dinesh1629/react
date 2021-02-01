import './App.css';
import React,{ Component } from 'react';
import Login from './Login'
import Home from './Home'


class App extends Component{
 
  Constructor(props){
    Super(props);
    this.state ={
      user:{},
    }
  }

  ComponentDidMount(){
    this.authListener
  }
   
  authListner(){
    firebase.auth().onAuthStateChanged((user) =>{
    //  console.log(user);
      if(user){
        this.setState({user});
        //localStorage.setItem('user',user.uid);
              }
              else{
                this.setState({user:null});
                //localStorage.removeItem('user');
              }
    }
  )
}

render(){
  return(
    <div className="App">
          { this.state.user ? (<Home />) :(<Login/>)}
    </div>
  );
}
}
export default App;
