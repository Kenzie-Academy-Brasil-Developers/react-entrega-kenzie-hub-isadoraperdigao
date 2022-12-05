import { DashboardPage } from './pages/dashboardPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='dashboard/:name' element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
