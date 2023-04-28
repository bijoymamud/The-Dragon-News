import moment from 'moment/moment';
import React from 'react';
import logo from "../../../../src/assets/logo.png";

const Header = () => {
    return (
        <div >
            <div className="text-center">
                <img src={logo} alt='logo' />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
                <p>{moment().format()}</p>
            </div>
        </div>
    );
};

export default Header;