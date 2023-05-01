import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavUnder from './LeftNavUnder';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);


    //for loading data from the express js/ from outside 
    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))

    }, [])



    return (
        <div>
            <h3>All Catagories</h3>

            <div className='ps-4 '>
                {
                    categories.map(category => <p
                        key={category.id}

                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>

            <LeftNavUnder></LeftNavUnder>
        </div>
    );
};

export default LeftNav;