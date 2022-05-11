import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          paddingBottom: '1rem',
          borderBottom: '2px solid black',
        }}
      >
        <div className="nav">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#000' : '',
                background: isActive ? '#e6e6e6' : '',
              };
            }}
            to="/invoices"
          >
            Invoices
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#000' : '',
                background: isActive ? '#e6e6e6' : '',
              };
            }}
            to="/expenses"
          >
            Expenses
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
