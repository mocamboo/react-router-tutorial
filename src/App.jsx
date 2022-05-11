import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
        <Link to="/invoices">Invoices</Link>
        <br />
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
