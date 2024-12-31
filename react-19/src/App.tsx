import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage.lazy.tsx';
import Layout from './components/Layout/Layout.tsx';
import HomePage from './pages/HomePage/HomePage.lazy.tsx';
import NotFound404 from './pages/common/errors/NotFound404/NotFound404.lazy.tsx';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/home'} index={true} element={<HomePage />} />
      </Route>
      <Route path={'/login'} element={<LoginPage />} />
      <Route element={<NotFound404 />} />
    </Routes>
  );
};

export default App;
