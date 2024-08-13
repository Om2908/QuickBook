import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-yellow-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            
Welcome to QuickBook, your one-stop online shop for all things literary! Whether you're searching for the latest bestsellers, timeless classics, or niche genres, we've got you covered. Enjoy seamless browsing, secure payments, and fast delivery, all from the comfort of your home. Dive into the world of books with us and find your next favorite read today!
          </p>
          <Link to="/">
            <button className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
