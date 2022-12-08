import { DashboardPage } from './pages/dashboardPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='dashboard/:name' element={<DashboardPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
