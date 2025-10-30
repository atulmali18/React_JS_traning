import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">About Us</h1>
          <p className="lead text-center">
            Welcome to the About page. Here you can find more information about our company, mission, and values.
          </p>
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                Our mission is to deliver high-quality products and services that meet the needs of our customers. 
                We aim to innovate and create solutions that drive success for businesses and individuals alike.
              </p>
            </div>
          </div>
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h5 className="card-title">Our Values</h5>
              <ul>
                <li>Customer Centricity</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
