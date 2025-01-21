import React, { useState } from "react";
import "./form.css";

function Formm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your table booking is successful!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      people: 1,
    });
  };

  return (
    <>

   <div className="main">
    
   
    <div className="booknowimg"> 
   
     
<img src="../assets/boook3.jpg"/>
</div>

 <div className="reservation-container">
      {/* Form Section */}
      <div className="form-section">
        <h2 className="form-title">Book a Table</h2>
        <p className="form-description">
          Fill out the form below to reserve your table.
        </p>
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="people">Number of People</label>
            <input
              type="number"
              id="people"
              name="people"
              min="1"
              value={formData.people}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Book Table
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default Formm;
