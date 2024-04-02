import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData()
    console.log(bookDetails)
    return (
        <div>
            
        </div>
    );
};

export default BookDetails;