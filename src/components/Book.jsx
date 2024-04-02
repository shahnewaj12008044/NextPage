import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    
  return (
    <Link to={`/book/${book.isbn13}`}>
    <div className="overflow-hidden relative transition transform duration-200 hover:translate-y-2 shadow-lg rounded hover:shadow-2xl">
      <img
        src={book.image}
        alt="book cover"
        className="object-cover w-full h-56 md:h-64 xl:h-80"
      />
      <div className="bg-black bg-opacity-75 py-4 px-6 opacity-0 hover:opacity-100 text-gray-300 absolute transition-opacity duration-200 flex flex-col  inset-0">
        <p>{book.title}</p>
        <br />
        <p>{book.subtitle.substring(0, 45)}...</p>
        <br />
        <p className="mt-auto">Price:${book.price}</p>
      </div>
    </div>
    </Link>
  );
};

export default Book;
