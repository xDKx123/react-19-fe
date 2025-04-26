import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage.lazy.tsx';
import Layout from './components/Layout/Layout.tsx';
import HomePage from './pages/HomePage/HomePage.lazy.tsx';
import NotFound404 from './pages/common/errors/NotFound404/NotFound404.lazy.tsx';
import AddEditModel from "./components/AddEditModel/AddEditModel.lazy.tsx";
import DefaultBrowsePage from "./pages/DefaultBrowsePage/DefaultBrowsePage.tsx";

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index={true} element={<HomePage />} />
          <Route path={':module/:model/:id'} element={<AddEditModel/>} />
          <Route path={':module/:model/new'} element={<AddEditModel/>} />
          <Route path={':module/:model'} element={<DefaultBrowsePage/>} />
      </Route>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'*'} element={<NotFound404 />} />
    </Routes>
  );
};

export default App;
