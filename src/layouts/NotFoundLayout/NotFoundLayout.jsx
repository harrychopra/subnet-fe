import { Link } from 'react-router-dom';
import './NotFoundLayout.css';

export default function NotFoundLayout() {
  return (
    <>
      <h2>404: Not Found</h2>
      <Link to="/">Home</Link>
    </>
  );
}
