import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Footer, Navbar, Sidebar, ThemeSettings } from './components';
import {
  Area, Bar, Calendar, ColorMapping, ColorPicker, Customers,
  Ecommerce, Editor, Employees, Financial, Kanban, Line,
  Orders, Pie, Pyramid, Stacked
} from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useStateContext } from './contexts/ContextProvider';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  const {
    setCurrentColor, setCurrentMode, currentMode,
    activeMenu, currentColor, themeSettings, setThemeSettings
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div className={
            activeMenu
              ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
              : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>

                {/* 🔐 Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* ✅ Dashboard Route */}
                <Route path="/dashboard" element={<ProtectedRoute><Ecommerce /></ProtectedRoute>} />

                {/* 🌐 Other Protected Routes */}
                <Route path="/ecommerce" element={<ProtectedRoute><Ecommerce /></ProtectedRoute>} />
                <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
                <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
                <Route path="/kanban" element={<ProtectedRoute><Kanban /></ProtectedRoute>} />
                <Route path="/editor" element={<ProtectedRoute><Editor /></ProtectedRoute>} />
                <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
                <Route path="/color-picker" element={<ProtectedRoute><ColorPicker /></ProtectedRoute>} />
                <Route path="/line" element={<ProtectedRoute><Line /></ProtectedRoute>} />
                <Route path="/area" element={<ProtectedRoute><Area /></ProtectedRoute>} />
                <Route path="/bar" element={<ProtectedRoute><Bar /></ProtectedRoute>} />
                <Route path="/pie" element={<ProtectedRoute><Pie /></ProtectedRoute>} />
                <Route path="/financial" element={<ProtectedRoute><Financial /></ProtectedRoute>} />
                <Route path="/color-mapping" element={<ProtectedRoute><ColorMapping /></ProtectedRoute>} />
                <Route path="/pyramid" element={<ProtectedRoute><Pyramid /></ProtectedRoute>} />
                <Route path="/stacked" element={<ProtectedRoute><Stacked /></ProtectedRoute>} />

                {/* 🚀 Default Route */}
                <Route path="/" element={<Navigate to="/dashboard" />} />

                {/* ❌ Catch-All */}
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
