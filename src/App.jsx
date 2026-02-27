import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.jsx';
import NotFoundLayout from './layouts/NotFoundLayout/NotFoundLayout.jsx';
import Article from './views/Article/Article.jsx';
import Articles from './views/Articles/Articles.jsx';
import Users from './views/Users/Users.jsx';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) setUser(JSON.parse(savedUser));
    } else {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  // console.log(user);

  return (
    <div className="container">
      <Routes>
        <Route element={<DefaultLayout user={user} />}>
          <Route
            path="/"
            element={<Navigate to={user ? '/articles' : '/users'} />}
          />
          <Route path="/users" element={<Users setUser={setUser} />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<Article />} />
        </Route>
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </div>
  );
}
