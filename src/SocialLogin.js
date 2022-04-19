import React from 'react';
import google from './images/logo/google_PNG3.png'
import Facebook from './images/logo/Facebook.png'
import github from './images/logo/Github_logo_PNG13.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const navigate = useNavigate();
    let errorElement;
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    
    if (error || error1) {
        errorElement = (
          <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
        );
      }
     
      if (user || user1) {
         navigate('/home')
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()}  className=' btn btn-success w-50 d-block mx-auto my-3'><img className='me-2' height={'49px'} width={'40px'} src={google} alt="" /> Google Sign In</button>
                <button className='btn btn-success  d-block mx-auto w-50 my-3'><img className='' width={'70px'} src={Facebook} alt="" /> Facebook Sign In</button>
                <button onClick={() => signInWithGithub()}  className='btn btn-success  d-block mx-auto w-50 '><img className='' width={'70px'} src={github} alt=""/> Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;