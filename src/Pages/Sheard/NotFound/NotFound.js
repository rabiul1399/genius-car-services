import React from 'react';
import notfound from '../../../images/404.jpg'
const NotFound = () => {
    return (
        <div className='text-center mt-5'>
           <h2 className='text-primary pt-3'>mechanic is sleeping</h2>
            <img className='w-75 ' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;