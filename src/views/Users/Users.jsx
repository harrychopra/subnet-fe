import { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/users.js';
import Loading from '../../components/Loading/Loading.jsx';
import UserCard from '../../components/UserCard/UserCard.jsx';
import './Users.css';

export default function Users({ setUser }) {
  const [state, setState] = useState({
    users: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchUsers()
      .then(users => {
        setState({ ...state, users, loading: false });
      })
      .catch(error =>
        setState({
          ...state,
          error: error.message || 'Failed to fetch users',
          loading: false,
        }),
      );
  }, []);

  const { users, error, loading } = state;

  if (loading) return <Loading message="users" />;
  if (error) return <p>{error}</p>;
  if (!users) return null;

  return (
    <div className="users">
      {users.map((user, idx) => {
        return <UserCard user={user} setUser={setUser} key={idx + 1} />;
      })}
    </div>
  );
}
