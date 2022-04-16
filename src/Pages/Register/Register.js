import React, { useRef } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const emailRef = useRef('');
    const passwordRef =useRef('');
    const nameRef = useRef('');

    const handleRegister = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
  console.log(event.target.name)
console.log(name,email,password)
    }


    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center mt-2'>Register Now</h3>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Your Name" required/>
                </Form.Group>
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
            <p className='mt-2'>Already have an account? <Link to='/login' className='text-danger cursor pe-auto text-decoration-none ' >Login</Link></p>
        </div>
    );
};

export default Register;