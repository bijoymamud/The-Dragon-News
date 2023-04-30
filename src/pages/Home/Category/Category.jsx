import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {

    const { id } = useParams();

    const categoryNews = useLoaderData();

    return (
        <div>
            <h3>This is category: {categoryNews.length}</h3>
        </div>
    );
};

export default Category;