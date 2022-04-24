import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
// import repier from '../../images/repier-1.png'
import './services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div id="services">
            <h2  className='text-center text-primary mt-5'>Our Services</h2>
           
            <div className='car-services'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;