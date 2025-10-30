import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Services = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                We create responsive and high-quality websites tailored to your business needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text">
                Our team builds user-friendly mobile applications for both Android and iOS platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">
                We design beautiful, intuitive, and functional user interfaces to enhance user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">SEO Optimization</h5>
              <p className="card-text">
                Our SEO services help improve your website's visibility and search engine ranking.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text">
                We provide strategic digital marketing campaigns to grow your online presence.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Consulting</h5>
              <p className="card-text">
                Our experts offer consulting services to help businesses implement effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
