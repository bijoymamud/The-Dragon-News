import React, { useEffect, useState } from 'react';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);


    //for loading data from the express js/ from outside 
    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

    }, [])



    return (
        <div>
            <h3>This is left nav</h3>
        </div>
    );
};

export default LeftNav;