import Ract ,{ COmponent }from 'react';

import firebase from 'firebase';


class Home extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div ClassName="col-md-4">
                <h1>You are at Home</h1>
            </div>
        );
    }
}
export default Home;