import React from 'react';

const Footer = () => {
    return (
        <div className='text-white bg-dark mt-5'>
            <h3>This is Footer</h3>
            <p>copyRight  © {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;