import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <h2>Posts</h2>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
