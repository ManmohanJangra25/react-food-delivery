import { useSearchParams, useNavigation } from "react-router-dom";
import Login from "../util/auth/Login";
import SignUp from "../util/auth/SignUp";

const UserAuthentication = () => {
    const navigation = useNavigation();
    const [searchParams] = useSearchParams();
    const authMode = searchParams.get('mode');
    const isSubmitting = navigation.state === 'submitting';

    if(authMode === 'signup'){
        return(
            <SignUp />
        );
    } else if ( authMode === 'login') {
        return(
            <Login />
        );
    } else if (authMode === 'forgot-password')  {
        return (
            <div>Forgot Password</div>
        )
    }

}

export default UserAuthentication;