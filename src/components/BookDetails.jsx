import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const [fold, setFold] = useState(false);
  // console.log(bookDetails)
  const { image, title, desc, authors, publisher, year, rating, url, price } =
    bookDetails;
    const navigation = useNavigation();
    if(navigation.state =='loading'){
        return <LoadingSpinner></LoadingSpinner>
    }


  return (
    <div className="my-container">
      {/* container box */}
      <div className="flex flex-col lg:flex-row max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm sm:mx-auto">
        {/* image container */}
        <div className="lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* details container */}
        <div className="bg-white p-8 lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">Brand new</p>
          </div>
          <h5 className="mb-3 font-extrabold text-3xl leading-none sm:text-4xl">
            {title}
          </h5>
          <p className="text-gray-900">Author:{authors.substring(0, 50)}</p>
          <p className="text-gray-900">Publisher:{publisher}</p>
          <p className="text-gray-900">Year:{year}</p>
          <p className="text-gray-900">Ratings:{rating}</p>
          {fold ? (
            <>
              <p className="text-gray-500">{desc.substring(0, 100)}...</p>
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setFold(!fold)}
              >
                Read more
              </span>
            </>
          ) : (
            <>
              <p className="text-gray-900">{desc}...</p>
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setFold(!fold)}
              >
                Read less
              </span>
            </>
          )}
          <div className='flex gap-5 mt-8 items-center'>
            <a href={url} target='_blank' className='btn'>
              Buy Now
            </a>
            <p className='items-center font-extrabold text-gray-600 '>
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
