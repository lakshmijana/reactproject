


import React from "react";
import { FaUtensils, FaLeaf, FaSmile } from "react-icons/fa";
import "./aboutus.css"

const AboutUs = () => {
  return (
    <div className="about-us">
    

      {/* Mission Section */}
      <section className="mission">
        <h2>We Provide</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <FaUtensils className="icon" />
            <h3>Delicious Food</h3>
            <p>Enjoy a menu crafted with love and authentic flavors.</p>
          </div>
          <div className="mission-card">
            <FaLeaf className="icon" />
            <h3>Fresh Ingredients</h3>
            <p>We source the freshest ingredients for every dish.</p>
          </div>
          <div className="mission-card">
            <FaSmile className="icon" />
            <h3>Warm Ambiance</h3>
            <p>Experience a cozy setting perfect for any occasion.</p>
          </div>
        </div>
      </section>

      {/* Chef Cards Section */}
      <section className="chefs">
        <h2>Meet Our Chefs</h2>
        <div className="chef-cards">
          <div className="chef-card">
            <img src="assets/c1.jpg" alt="Chef Alex" />
            <h3>Chef Alex</h3>
            <p>Specializes in Italian cuisine and creating mouthwatering pasta dishes.</p>
          </div>
          <div className="chef-card">
            <img src="assets/c2.jpg" alt="Chef Maria" />
            <h3>Chef Maria</h3>
            <p>Known for her desserts that are a perfect blend of art and taste.</p>
          </div>
          <div className="chef-card">
            <img src="assets/c3.jpg" alt="Chef John" />
            <h3>Chef John</h3>
            <p>A grill master, bringing bold and smoky flavors to your plate.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
