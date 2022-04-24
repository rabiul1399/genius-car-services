import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service,setService]= useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className='text-center m-4'>
            <h3>Welcome  is detail {service.name}</h3>
            <div >
                <Link to='/checkout' >
                    <button className='mt-3 btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;