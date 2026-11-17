import React from 'react';
import { AssessmentProvider, useAssessment } from './context/AssessmentContext';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import AptitudePage from './pages/AptitudePage';
import InterestPage from './pages/InterestPage';
import SelfEfficacyPage from './pages/SelfEfficacyPage';
import ExposurePage from './pages/ExposurePage';
import ResultsPage from './pages/ResultsPage';
import StreamDetailsPage from './pages/StreamDetailsPage';
import AboutPage from './pages/AboutPage';

function AppContent() {
  const { activeScreen } = useAssessment();

  const renderScreen = () => {
    switch (activeScreen) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'profile':
        return <ProfilePage />;
      case 'aptitude':
        return <AptitudePage />;
      case 'interests':
        return <InterestPage />;
      case 'self-efficacy':
        return <SelfEfficacyPage />;
      case 'exposure':
        return <ExposurePage />;
      case 'results':
        return <ResultsPage />;
      case 'stream-details':
        return <StreamDetailsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <LandingPage />;
    }
  };

  const isLanding = activeScreen === 'landing';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      <Navbar />

      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        {/* Render Sidebar only on non-landing views */}
        {!isLanding && <Sidebar />}

        <main className={`flex-1 w-full ${isLanding ? 'px-0' : 'px-4 sm:px-6 lg:px-8'} py-2`}>
          {renderScreen()}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AssessmentProvider>
      <AppContent />
    </AssessmentProvider>
  );
}
