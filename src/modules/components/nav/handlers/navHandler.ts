import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
// se usa solo en el nav
const useNavHandler = () => {
    const[user,setUser]=useState(false)

    const [showLoginButton, setShowLoginButton] = useState(true); 
//login google
    const handleLoginButtonClick = () => {
        setTimeout(() => {
        setShowLoginButton(false);
        }, 5000);
    }
    const onSuccess = (credentialResponse:any) => {
        jwtDecode(credentialResponse.credential);
        console.log(jwtDecode(credentialResponse.credential))
        console.log(onSuccess)
        setUser(true)
    }
    //
return{
    user,setUser,
    onSuccess,
    showLoginButton,
    setShowLoginButton,
    handleLoginButtonClick,
    setTimeout
}
}
export default useNavHandler;