import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card p-5 shadow-sm">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="mb-4">Oops! Page Not Found</h2>
            <p className="lead">Sorry, the page you're looking for doesn't exist or has been moved.</p>
            <a href="/" className="btn btn-primary">Go to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
