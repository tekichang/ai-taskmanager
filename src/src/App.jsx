import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  if (loading) return <div className="centered">Loading...</div>;
  if (!user) return showSignup
    ? <SignupPage onSwitch={() => setShowSignup(false)} />
    : <LoginPage onSwitch={() => setShowSignup(true)} />;
  return <HomePage />;
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
