import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useUser } from './context/UserContext.jsx';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.jsx';
import NotFoundLayout from './layouts/NotFoundLayout/NotFoundLayout.jsx';
import Article from './views/Article/Article.jsx';
import Articles from './views/Articles/Articles.jsx';
import Topics from './views/Topics/Topics.jsx';
import Users from './views/Users/Users.jsx';

export default function App() {
  const { user } = useUser();

  return (
    <div className="container">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<Navigate to={user ? '/articles' : '/users'} />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="/topics" element={<Topics />} />
        </Route>
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </div>
  );
}
