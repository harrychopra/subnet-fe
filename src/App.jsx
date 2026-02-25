import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.jsx';
import NotFoundLayout from './layouts/NotFoundLayout/NotFoundLayout.jsx';
import Articles from './views/Articles/Articles.jsx';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Articles />} />
        </Route>
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </div>
  );
}
