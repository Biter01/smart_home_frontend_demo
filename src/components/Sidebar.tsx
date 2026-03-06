import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export function Sidebar() {

  return (
    <aside
      className={styles.sidebar}
    >
      <h2 className={styles.title}>SmartHome</h2>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>
          Dashboard
        </NavLink>

        <NavLink to="/devices" className={styles.navLink}>
          Devices
        </NavLink>

        <NavLink to="/simulator" className={styles.navLink}>
          Simulator
        </NavLink>
      </nav>
    </aside>
  );
}