import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Goals from './pages/Goals';
import Agent from './pages/Agent';
import Credentials from './pages/Credentials';
import LifeDesignWizard from './pages/LifeDesignWizard';
import OnboardingWizard from './pages/OnboardingWizard';
import Achievements from './pages/Achievements';

function App() {
  const location = useLocation();
  const hasTarget = localStorage.getItem('lifeTarget');

  // Simple protection: If no target and not on onboarding, redirect
  if (!hasTarget && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <Routes>
      <Route path="/onboarding" element={<OnboardingWizard />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="goals" element={<Goals />} />
        <Route path="design" element={<LifeDesignWizard />} />
        <Route path="agent" element={<Agent />} />
        <Route path="credentials" element={<Credentials />} />
        <Route path="achievements" element={<Achievements />} />
        {/* Fallback for other routes */}
        <Route path="*" element={<div className="p-8">Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
