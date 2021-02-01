import React ,{Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';



class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }
}


// handleChange(e)
//     this.setState({[e.terget.name]: e.target.value});



render(){
    return(
        <div className="col-md-4">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail">Email Address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" 
                    id="exampleINputEmail" aria-describeby="emailHelp" placeholder="Enter email" />
                    </div>
                     <div class ="form-group">
                            <label for="exampleInputPassword">Password</label>
                            <input value={this.state.password} onChange={this.handleChange}  type="password"
                            name="password" class="form-control" id="exampleInputPassword" palceholder="password"
                        </div>

                        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                        <button onClick={this.signup} style={{marginLeft:"25px"}} className="btn btn-success">Signup</button>
                        

            </form>
        </div>
    );
}
}


export default Login ; 