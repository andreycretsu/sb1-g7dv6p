import React from 'react';
import { Plus } from 'lucide-react';

const SimilarProfiles: React.FC = () => {
  const profiles = [
    {
      email: 'anna.serhiienko@peopleforce.io',
      verified: true
    },
    {
      email: 'anna.solovyova2808@gmail.com',
      verified: true
    },
    {
      email: 'anna.wilczynska@autenti.com',
      verified: true
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-900 px-1">Similar Records</h3>
      <div className="ios-card divide-y divide-gray-50">
        {profiles.map((profile, index) => (
          <div key={index} className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-gray-50 flex items-center justify-center">
                {profile.verified && (
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                )}
              </div>
              <span className="text-xs text-gray-600">{profile.email}</span>
            </div>
            <button className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600">
              <Plus className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
      <button className="w-full py-2.5 text-xs font-medium text-gray-600 hover:bg-white rounded-xl border border-gray-100">
        Create record manually
      </button>
    </div>
  );
};

export default SimilarProfiles;