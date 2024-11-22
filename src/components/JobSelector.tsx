import React from 'react';
import { Briefcase } from 'lucide-react';
import SelectField from './SelectField';

interface JobSelectorProps {
  selectedJob: string;
  onJobSelect: (job: string) => void;
}

const JobSelector: React.FC<JobSelectorProps> = ({ selectedJob, onJobSelect }) => {
  const jobs = [
    { id: '1', title: 'Senior Frontend Developer', subtitle: 'Engineering' },
    { id: '2', title: 'Product Designer', subtitle: 'Design' },
    { id: '3', title: 'Technical Lead', subtitle: 'Engineering' },
    { id: '4', title: 'UX Researcher', subtitle: 'Design' }
  ];

  return (
    <div className="ios-card p-4">
      <SelectField
        icon={Briefcase}
        label="Job Opening"
        value={selectedJob}
        options={jobs}
        onChange={onJobSelect}
        placeholder="Select position"
      />
    </div>
  );
};

export default JobSelector;