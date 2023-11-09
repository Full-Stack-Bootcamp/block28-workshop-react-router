import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
      </nav>
      <h4>© 2023</h4>
    </div>
  );
}
