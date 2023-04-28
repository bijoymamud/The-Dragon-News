import React from 'react';
import qzone1 from '../../../../src/assets//qZone1.png';
import qzone2 from '../../../../src/assets//qZone2.png';
import qzone3 from '../../../../src/assets//qZone3.png';

const Qzone = () => {
    return (
        <div>
            <div>
                <img className='mb-3' src={qzone1} alt="" />
                <img className='mb-3' src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>


        </div>
    );
};

export default Qzone;
