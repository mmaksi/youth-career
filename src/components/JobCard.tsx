import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  onApply: () => void;
}

const JobCard = ({ title, company, location, salary, description, onApply }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{company}</p>
        </div>
        <button
          onClick={onApply}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Apply Now
        </button>
      </div>

      <div className="mt-4 flex items-center space-x-4 text-gray-500">
        <div className="flex items-center">
          <MapPinIcon className="h-5 w-5 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-5 w-5 mr-1" />
          <span>{salary}</span>
        </div>
      </div>

      <p className="mt-4 text-gray-600 line-clamp-3">{description}</p>
    </div>
  );
};

export default JobCard;
