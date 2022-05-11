import * as ReactDOM from 'react-dom';
import { BrowserRouter as Br, Routes, Route } from 'react-router-dom';
import App from './App';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import Expenses from './routes/expenses';
import Nomatch from './nomatch';
import './main.css';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Br>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":id" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="*" element={<Nomatch />} />
      </Route>
    </Routes>
  </Br>,

  rootElement
);
