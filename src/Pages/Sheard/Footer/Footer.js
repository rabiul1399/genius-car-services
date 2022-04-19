import React from 'react';

const Footer = () => {
    return (
        <div className='text-white text-center p-5 bg-dark mt-5 h-25'>
            <h3>This is Footer</h3>
            <p className='mb-0'>CopyRight  © {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;