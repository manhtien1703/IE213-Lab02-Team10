import { Link } from "react-router-dom";
import "../css/Home.css";

function HomePage() {
  return (
    <div className="container">
      <h1>Trang Home</h1>
      <div className="button-container">
        <Link to="/birthday-reiminder">
          <button>Birthday reminder</button>
        </Link>
        <Link to="/tours">
          <button>Tours</button>
        </Link>
        <Link to="/reviews">
          <button>Reviews</button>
        </Link>
        <Link to="/accordion">
          <button>Accordion</button>
        </Link>
        <Link to="/menu">
          <button>Menu</button>
        </Link>
        <Link to="/tabs">
          <button>Tabs</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;