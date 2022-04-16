import React from 'react';

const Login = () => {
    return (
        <div className='text-center'>
          <h3>Please login</h3>
          <form  className='' action="">
              <input type="text" placeholder='Your Email' /><br />
              <input type="password" placeholder='Your Password' /><br />
              <input type="submit" value="Login" />
          </form>
        </div>
    );
};

export default Login;