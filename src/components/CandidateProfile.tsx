import React from 'react';
import { Mail, Building2, Briefcase, Linkedin, Brain, Plus } from 'lucide-react';
import FormField from './FormField';

const CandidateProfile: React.FC<CandidateProfile> = ({ onAssessAI }) => {
  return (
    <div className="ios-card p-4">
      <div className="flex items-center space-x-3 mb-4">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
          alt="Profile"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-900">Anna Gadomska</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <FormField
          icon={Mail}
          label="Email"
          value="gadomska.anna@example.com"
        />
        <FormField
          icon={Building2}
          label="Company"
          value="Miro"
        />
        <FormField
          icon={Briefcase}
          label="Position"
          value="Product Designer"
        />
        <FormField
          icon={Linkedin}
          label="LinkedIn"
          value="annagadomska"
        />
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <button className="flex-1 h-9 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-xl flex items-center justify-center space-x-1.5">
          <div className="h-5 w-5 bg-blue-500 rounded-lg flex items-center justify-center">
            <Plus className="h-3.5 w-3.5 text-white" />
          </div>
          <span>Add to PeopleForce</span>
        </button>
        <button 
          onClick={onAssessAI}
          className="flex-1 h-9 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-medium rounded-xl flex items-center justify-center space-x-1.5"
        >
          <div className="h-5 w-5 bg-gray-100 rounded-lg flex items-center justify-center">
            <Brain className="h-3.5 w-3.5 text-gray-500" />
          </div>
          <span>Assess with AI</span>
        </button>
      </div>
    </div>
  );
};

export default CandidateProfile;