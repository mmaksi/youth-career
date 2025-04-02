import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  postedDate: string;
}

const dummyJobs: Job[] = [
  {
    id: 1,
    title: 'Summer Camp Counselor',
    company: 'Sunshine Camps',
    location: 'Mountain View, CA',
    description:
      'Looking for energetic teens to lead summer camp activities and mentor younger campers.',
    requirements: ['Age 16+', 'First Aid certification preferred', 'Experience with children'],
    salary: '$15/hour',
    postedDate: '2024-03-25',
  },
  {
    id: 2,
    title: 'Retail Associate',
    company: 'TeenStyle Clothing',
    location: 'San Francisco, CA',
    description: 'Join our team of fashion-forward teens in our youth-focused clothing store.',
    requirements: ['Age 15+', 'Customer service skills', 'Fashion knowledge'],
    salary: '$14/hour',
    postedDate: '2024-03-24',
  },
  {
    id: 3,
    title: 'Tutor',
    company: 'StudyBuddy',
    location: 'Remote',
    description: 'Help younger students with their studies in various subjects.',
    requirements: ['Age 16+', 'Strong academic record', 'Patience and communication skills'],
    salary: '$20/hour',
    postedDate: '2024-03-23',
  },
];

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredJobs = dummyJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      locationFilter === '' ||
      (locationFilter === 'remote' && job.location.toLowerCase() === 'remote') ||
      (locationFilter === 'local' && job.location.toLowerCase() !== 'remote');

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Available Jobs</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="local">Local</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-500 mb-4">{job.location}</p>
            <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-semibold">{job.salary}</span>
              <Link
                to={`/job/${job.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
