import React, { useRef } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    // const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef =useRef('');

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

console.log(email,password)
    }

    // const navigateRegister = event =>{
    //     navigate('/register')
    // }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center mt-2'>Please login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <Link to='/register' className='text-danger cursor pe-auto text-decoration-none' >Please Register</Link></p>
        </div>
    );
};

export default Login;