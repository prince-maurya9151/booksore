// import React from "react";
// import './BuyBook.css';
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

// const BuyBooks = () => {
//   const handleBuy = (bookTitle) => {
//     alert(`You have selected to buy "${bookTitle}"`);
//   };

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Buy Books</h2>
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
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BuyBooks;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './BuyBook.css';

// const BuyBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/api/books") // backend API URL
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleBuy = (bookTitle) => {
//     alert(`You have selected to buy "${bookTitle}"`);
//   };

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Buy Books</h2>
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
//                   onClick={() => handleBuy(book.title)}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BuyBooks;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './BuyBook.css';

// const BuyBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/api/books/buy")
//       .then(res => setBooks(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleBuy = (bookTitle) => {
//     alert(`You have selected to buy "${bookTitle}"`);
//   };

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Buy Books</h2>
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
//                   onClick={() => handleBuy(book.title)}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BuyBooks;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './BuyBook.css';

// const BuyBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/api/books/buy") // Backend route
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleBuy = (bookTitle) => {
//     alert(`You have selected to buy "${bookTitle}"`);
//   };

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Buy Books</h2>
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
//                   onClick={() => handleBuy(book.title)}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BuyBooks;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./BuyBook.css";

// const BuyBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Backend API call
//     axios
//       .get("http://localhost:3002/books?type=buy") // backend route
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <section className="buybooks-section py-5">
//       <div className="container">
//         <h2 className="buybooks-title text-center mb-5">Buy Books</h2>
//         <div className="row g-4">
//           {books.map((book, index) => (
//             <div key={index} className="col-md-3 text-center">
//               <div className="book-card p-3 shadow rounded">
//                 <img src={book.img} alt={book.title} className="book-img img-fluid mb-3" />
//                 <h5 className="book-title">{book.title}</h5>
//                 <p className="book-author">{book.author}</p>
//                 <p className="book-price">₹{book.price}</p>
//                 <button className="buy-btn">Buy Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BuyBooks;












import React from "react";
import "./BuyBook.css";

// Static data for Buy Books
const books = [
  {
    title: "RAMAYAN",
    author: "Valmiki",
    price: 400,
    img: "media/Ramayan.jpg",
    type: "buy",
  },
  {
    title: "Mahabharat",
    author: "Vyasa",
    price: 450,
    img: "media/mahabharat.jpg",
    type: "buy",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 250,
    img: "media/alchemist.jpg",
    type: "buy",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 500,
    img: "media/harrypotter.png",
    type: "buy",
  },
];

const BuyBooks = () => {
  const handleBuy = (bookTitle) => {
    alert(`You have selected to buy "${bookTitle}"`);
  };

  return (
    <section className="buybooks-section py-5">
      <div className="container">
        <h2 className="buybooks-title text-center mb-5">Buy Books</h2>
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
                  className="buy-btn"
                  onClick={() => handleBuy(book.title)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyBooks;