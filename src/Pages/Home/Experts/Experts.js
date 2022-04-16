import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Rahim miya', img: expert2 },
    { id: 3, name: 'Rajob Ali', img: expert3 },
    { id: 4, name: 'Deloyer Khan', img: expert4 },
    { id: 5, name: 'Abbas Khan', img: expert5 },
    { id: 6, name: 'Asif Akbour', img: expert6 }
]
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h3 className='text-primary text-center mt-5'>This is Over Expert</h3>
            <div className='row'>
                {
                    experts.map(expert => <Expert expert={expert} key={expert.id}></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;