import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './views/DefaultLayout/DefaultLayout.jsx';
import NotFoundLayout from './views/NotFoundLayout/NotFoundLayout.jsx';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Route>
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </div>
  );
}
