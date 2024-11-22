import React from 'react';
import { MapPin, Building2, DollarSign, Calendar } from 'lucide-react';

interface CandidateCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  salary: string;
  status: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  name,
  role,
  company,
  image,
  salary,
  status
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{role}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="flex items-center text-sm text-gray-500">
              <Building2 className="h-4 w-4 mr-1.5" />
              {company}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <DollarSign className="h-4 w-4 mr-1.5" />
              ${salary}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View Profile
        </button>
        <button className="text-sm font-medium text-gray-600 hover:text-gray-700">
          Schedule Call
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;