import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Option {
  id: string;
  title: string;
  subtitle?: string;
}

interface SelectFieldProps {
  icon: LucideIcon;
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  icon: Icon,
  label,
  value,
  options,
  onChange,
  className = '',
  placeholder = 'Select option'
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 h-7 w-7 bg-gray-200 rounded-lg flex items-center justify-center">
        <Icon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="w-full pl-12 pr-4 py-1.5">
        <span className="block text-[10px] leading-none text-gray-400 mb-0.5">{label}</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent text-sm text-gray-900 focus:outline-none border-none p-0 pr-6"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}{option.subtitle ? ` • ${option.subtitle}` : ''}
            </option>
          ))}
        </select>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default SelectField;