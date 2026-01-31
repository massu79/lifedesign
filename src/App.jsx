import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Goals from './pages/Goals';
import Agent from './pages/Agent';
import Credentials from './pages/Credentials';
import LifeDesignWizard from './pages/LifeDesignWizard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="goals" element={<Goals />} />
        <Route path="design" element={<LifeDesignWizard />} />
        <Route path="agent" element={<Agent />} />
        <Route path="credentials" element={<Credentials />} />
        {/* Fallback for other routes */}
        <Route path="*" element={<div className="p-8">Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
