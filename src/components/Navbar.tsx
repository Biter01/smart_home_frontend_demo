import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 20 }}>Dashboard</Link>
      <Link to="/devices" style={{ marginRight: 20 }}>Devices</Link>
      <Link to="/simulator">Simulator</Link>
    </nav>
  );
}