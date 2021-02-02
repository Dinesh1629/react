import React, { useEffect , useSate } from 'react';
import app from './Base.js';

export const AuthContext = React .createContext();

export const AuthProvider = ({ Children }) => {
    const [currentUser,setCurrentUser] = useState(null);
   
//     useEffect{() =>
//     app.auth().onAuthStateChanged(setCurrentUser);
// },[]);

return(
    <AuthContext.provider value={{
        currentUser
    }}
    >
        {children}
    </AuthContext.provider>
);

};