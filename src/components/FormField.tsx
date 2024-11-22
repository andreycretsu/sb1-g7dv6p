import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  icon: LucideIcon;
  label: string;
  value: string;
  readOnly?: boolean;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  icon: Icon,
  label,
  value,
  readOnly = true,
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-7 w-7 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="flex-1 ml-2">
        <span className="block text-[10px] leading-none text-gray-400 mb-0.5">{label}</span>
        <input
          type="text"
          value={value}
          readOnly={readOnly}
          className="block w-full text-sm text-gray-900 bg-transparent border-none p-0 focus:ring-0"
        />
      </div>
    </div>
  );
};

export default FormField;