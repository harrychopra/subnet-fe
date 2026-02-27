import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.jsx';
import NotFoundLayout from './layouts/NotFoundLayout/NotFoundLayout.jsx';
import Article from './views/Article/Article.jsx';
import Articles from './views/Articles/Articles.jsx';
import Users from './views/Users/Users.jsx';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      const savedUser = localStorage.getItem('user');
      if (savedUser) setUser(JSON.parse(savedUser));
    }
  }, [user]);

  return (
    <div className="container">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={
              user ? (
                <Articles currentUser={user} />
              ) : (
                <Users setUser={setUser} />
              )
            }
          />
          <Route path="/articles/:articleId" element={<Article />} />
        </Route>
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </div>
  );
}
