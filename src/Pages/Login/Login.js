import React, { useRef } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../../SocialLogin';
import PageTitle from '../Sheard/PageTitle/PageTitle';



const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef =useRef('');
    
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

      if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      if(user){
          navigate(from,{replace:true});
      }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
           signInWithEmailAndPassword(email,password)
    }

    // const navigateRegister = event =>{
    //     navigate('/register')
    // }


    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    return (
       
        <div className='container w-50 mx-auto'>
             <PageTitle title={'Login'}></PageTitle>
            <h3 className='text-center mt-2'>Please login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='mt-3'>New to Genius Car? <Link to='/register' className='text-primary  cursor pe-auto text-decoration-none' >Please Register</Link></p>
            <p className='mt-3'>Forget password? <Link to='/register' 
            onClick={resetPassword} className='text-primary  cursor pe-auto text-decoration-none' >Reset password</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;