import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import './DefaultLayout.css';

export default function DefaultLayout({ user }) {
  return (
    <>
      <Header user={user} />
      <Outlet user={user} />
    </>
  );
}
