import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="media/team.jpg"
              alt="About BookRent"
              className="about-img img-fluid rounded shadow"
            />
          </div>

          {/* Right side: Text */}
          <div className="col-md-6">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              Welcome to <strong>BookRent</strong>, India’s trusted platform for
              renting and reselling books. We believe that knowledge should
              never be expensive. Our mission is to make reading affordable and
              sustainable by allowing students and readers to{" "}
              <strong>rent books at low prices</strong> or{" "}
              <strong>resell their old books</strong> to others who need them.
            </p>
            <p className="about-text">
              Whether you’re a student preparing for exams, a book lover
              exploring new genres, or someone who wants to declutter your
              shelf, <strong>BookRent</strong> is here to help.
            </p>
            <p className="about-text">
              By reusing and sharing books, we not only save money but also
              contribute to an eco-friendly, sustainable future. Join us in
              building a smarter, greener reading community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;