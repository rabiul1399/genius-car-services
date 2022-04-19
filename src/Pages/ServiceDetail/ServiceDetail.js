import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='text-center m-4'>
            <h3>Welcome  is detail {serviceId}</h3>
            <div >
                <Link to='/checkout' >
                    <button className='mt-3 btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;