// import React from "react";
// import './RentBook.css';
// const books = [
  
//   {
//     title: "RAMAYAN",
//     author: "Valmiki",
//     price: "₹400",
//     img: "media/Ramayan.jpg",
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: "₹250",
//     img: "media/alchemist.jpg",
//   },
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     price: "₹500",
//     img: "media/harrypotter.png",
//   },
//   {
//     title: "PUZZLE",
//     author: "Skuntala devi",
//     price: "₹300",
//     img: "media/puzzle.jpg",
//   },
// ];

// const RentBook = () => {
//   const handleBuy = (bookTitle) => {
//     alert(`You have selected to buy "${bookTitle}"`);
//   };

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Rent Books</h2>
//         <div className="row g-4">
//           {books.map((book, index) => (
//             <div key={index} className="col-md-3 text-center">
//               <div className="book-card p-3 shadow rounded">
//                 <img
//                   src={book.img}
//                   alt={book.title}
//                   className="book-img img-fluid mb-3"
//                 />
//                 <h5 className="book-title">{book.title}</h5>
//                 <p className="book-author">{book.author}</p>
//                 <p className="book-price">{book.price}</p>
//                 <button
//                   className="buy-btn"
//                   onClick={() => handleBuy(book.title)}
//                 >
//                   Rent Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RentBook;







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './RentBook.css';

// const RentBook = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/api/books") // backend API call
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleRent = (bookTitle) => {
//     alert(`You have selected to rent "${bookTitle}"`);
//   };

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Rent Books</h2>
//         <div className="row g-4">
//           {books.map((book, index) => (
//             <div key={index} className="col-md-3 text-center">
//               <div className="book-card p-3 shadow rounded">
//                 <img
//                   src={book.img}
//                   alt={book.title}
//                   className="book-img img-fluid mb-3"
//                 />
//                 <h5 className="book-title">{book.title}</h5>
//                 <p className="book-author">{book.author}</p>
//                 <p className="book-price">₹{book.price}</p>
//                 <button
//                   className="buy-btn"
//                   onClick={() => handleRent(book.title)}
//                 >
//                   Rent Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RentBook;



import React from "react";
import "./RentBook.css";

// Static data for Rent Books
const books = [
  {
     title: "RAMAYAN",
     author: "Valmiki",
     price: "₹400",
     img: "media/Ramayan.jpg",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 500,
    img: "media/harrypotter.png",
    type: "rent",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 250,
    img: "media/alchemist.jpg",
    type: "rent",
  },
  {
    title: "PUZZLE",
    author: "Skuntala Devi",
    price: 300,
    img: "media/puzzle.jpg",
    type: "rent",
  },
 
];

const RentBook = () => {
  const handleRent = (bookTitle) => {
    alert(`You have selected to rent "${bookTitle}"`);
  };

  return (
    <section className="rentbooks-section py-5">
      <div className="container">
        <h2 className="rentbooks-title text-center mb-5">Rent Books</h2>
        <div className="row g-4">
          {books.map((book, index) => (
            <div key={index} className="col-md-3 text-center">
              <div className="book-card p-3 shadow rounded">
                <img
                  src={book.img}
                  alt={book.title}
                  className="book-img img-fluid mb-3"
                />
                <h5 className="book-title">{book.title}</h5>
                <p className="book-author">{book.author}</p>
                <p className="book-price">₹{book.price}</p>
                <button
                  className="rent-btn"
                  onClick={() => handleRent(book.title)}
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentBook;