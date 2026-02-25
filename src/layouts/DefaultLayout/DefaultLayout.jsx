import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import './DefaultLayout.css';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
