import React from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <div>
      <header className="group-col centered">
        <Link to="/">
          <h1>Periodic Tables</h1>
        </Link>
        <nav>
          <div>
            <ul className="group-row">
              <li>
                <Link to="/dashboard">
                  <span />
                  &nbsp;Dashboard
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <span />
                  &nbsp;Search
                </Link>
              </li>
              <li>
                <Link to="/reservations/new">
                  <span />
                  &nbsp;New Reservation
                </Link>
              </li>
              <li>
                <Link to="/tables/new">
                  <span />
                  &nbsp;New Table
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Menu;
