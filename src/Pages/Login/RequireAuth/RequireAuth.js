import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

import { Spinner } from 'react-bootstrap';
const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);



    if(loading){
        return (
            <div className='d-flex justify-content-center mt-5'>
           <Spinner animation="border" variant="danger" />
           </div>
        )
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.emailVerified){
        return <div className='text-center'>
            <h3 className='text-danger'>Your Email is not Verified!</h3>    
            <h5 className='text-success'>Please verify you email address </h5>   
            <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
      <ToastContainer />
                </div>
    }
    return children;
};

export default RequireAuth;