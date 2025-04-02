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
  status: 'active' | 'closed';
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
    status: 'active',
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
    status: 'active',
  },
];

const AdminDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>(dummyJobs);
  const [showNewJobForm, setShowNewJobForm] = useState(false);
  const [newJob, setNewJob] = useState<Partial<Job>>({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: [''],
    salary: '',
    status: 'active',
  });

  const handleNewJobChange = (field: keyof Job, value: string | string[]) => {
    setNewJob((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    setNewJob((prev) => ({
      ...prev,
      requirements: prev.requirements?.map((req, i) => (i === index ? value : req)),
    }));
  };

  const addRequirement = () => {
    setNewJob((prev) => ({
      ...prev,
      requirements: [...(prev.requirements || []), ''],
    }));
  };

  const handleSubmitNewJob = () => {
    const job: Job = {
      ...(newJob as Job),
      id: jobs.length + 1,
      postedDate: new Date().toISOString().split('T')[0],
    };
    setJobs((prev) => [...prev, job]);
    setShowNewJobForm(false);
    setNewJob({
      title: '',
      company: '',
      location: '',
      description: '',
      requirements: [''],
      salary: '',
      status: 'active',
    });
  };

  const toggleJobStatus = (jobId: number) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, status: job.status === 'active' ? 'closed' : 'active' } : job
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={() => setShowNewJobForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Post New Job
          </button>
        </div>

        {showNewJobForm && (
          <div className="mb-8 p-6 border rounded-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Post New Job</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={newJob.title}
                  onChange={(e) => handleNewJobChange('title', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  value={newJob.company}
                  onChange={(e) => handleNewJobChange('company', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={newJob.location}
                  onChange={(e) => handleNewJobChange('location', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="text"
                  value={newJob.salary}
                  onChange={(e) => handleNewJobChange('salary', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newJob.description}
                  onChange={(e) => handleNewJobChange('description', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Requirements</label>
                {newJob.requirements?.map((req, index) => (
                  <input
                    key={index}
                    type="text"
                    value={req}
                    onChange={(e) => handleRequirementChange(index, e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter a requirement"
                  />
                ))}
                <button onClick={addRequirement} className="mt-2 text-blue-600 hover:text-blue-700">
                  + Add Requirement
                </button>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowNewJobForm(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitNewJob}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Post Job
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Active Job Listings</h2>
          {jobs.map((job) => (
            <div key={job.id} className="border rounded-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-gray-500">{job.location}</p>
                  <p className="text-green-600 font-semibold mt-2">{job.salary}</p>
                  <p className="text-gray-500 text-sm mt-1">Posted: {job.postedDate}</p>
                </div>
                <button
                  onClick={() => toggleJobStatus(job.id)}
                  className={`px-4 py-2 rounded-md ${
                    job.status === 'active'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {job.status === 'active' ? 'Close Job' : 'Reopen Job'}
                </button>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
