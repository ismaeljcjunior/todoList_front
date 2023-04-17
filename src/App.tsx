
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}


