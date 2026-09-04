import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="container">
        <div className="notfound-content">
          <h1 className="notfound-code">404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="notfound-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <FaHome /> Back to Home
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              <FaSearch /> Browse Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
