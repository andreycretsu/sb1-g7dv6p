import React, { useState } from 'react';
import { X, Brain } from 'lucide-react';
import CandidateProfile from './components/CandidateProfile';
import AIInsights from './components/AIInsights';
import SimilarProfiles from './components/SimilarProfiles';
import Logo from './components/Logo';
import JobSelector from './components/JobSelector';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [showAI, setShowAI] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  if (!isOpen) return null;

  return (
    <>
      {/* AI Insights Drawer */}
      {showAI && (
        <div className="ai-drawer">
          <div className="bg-white px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-blue-600" />
                <h2 className="text-base font-semibold text-gray-900">AI Insights</h2>
              </div>
              <button 
                onClick={() => setShowAI(false)}
                className="p-1.5 hover:bg-gray-50 rounded-full"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="p-4 overflow-auto">
            <AIInsights />
          </div>
        </div>
      )}

      {/* Main Drawer */}
      <div className="extension-drawer">
        <header className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo className="h-6 w-6" />
              <h1 className="text-base font-semibold text-gray-900">PeopleForce</h1>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-gray-50 rounded-full"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </header>

        <main className="p-4 overflow-auto">
          <div className="space-y-4">
            <JobSelector 
              selectedJob={selectedJob}
              onJobSelect={setSelectedJob}
            />
            <CandidateProfile onAssessAI={() => setShowAI(true)} />
            <SimilarProfiles />
          </div>
        </main>
      </div>
    </>
  );
}