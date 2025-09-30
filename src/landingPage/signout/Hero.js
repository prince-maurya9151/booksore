// import React from 'react';
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Signup Successful!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <section className="signup-section py-5">
      <div className="container">
        <h2 className="signup-title text-center mb-4">Sign Up</h2>
        <form className="signup-form mx-auto" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;