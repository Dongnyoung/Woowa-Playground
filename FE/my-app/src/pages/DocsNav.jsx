// src/pages/DocsNav.jsx
import { NavLink } from "react-router-dom";

export default function DocsNav() {
  return (
    <nav className="docs-nav">
      <h3 className="docs-nav-title">Modules</h3>
      <ul>
        <li>
          <NavLink to="/docs" className="docs-nav-link">
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/console" className="docs-nav-link">
            Console
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/inputs" className="docs-nav-link">
            Inputs
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/randoms" className="docs-nav-link">
            Randoms
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/datetimes" className="docs-nav-link">
            DateTimes
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/strings" className="docs-nav-link">
            Strings
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/banners" className="docs-nav-link">
            Banners
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
