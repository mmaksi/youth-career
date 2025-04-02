import { useState } from 'react';
import JobCard from './JobCard';

// Dummy data for jobs
const dummyJobs = [
  {
    id: 1,
    title: 'Summer Camp Counselor',
    company: 'Sunshine Camps',
    location: 'Los Angeles, CA',
    salary: '$15/hour',
    description:
      'Looking for energetic teens to work as camp counselors this summer. Experience with children is a plus!',
  },
  {
    id: 2,
    title: 'Retail Associate',
    company: 'TeenStyle Clothing',
    location: 'Remote',
    salary: '$14/hour',
    description:
      'Join our online retail team! Help customers find the perfect outfit and manage social media content.',
  },
  {
    id: 3,
    title: 'Tutor',
    company: 'StudyBuddy',
    location: 'New York, NY',
    salary: '$20/hour',
    description: 'Help younger students with their studies. Must be strong in math and science.',
  },
];

const JobsPage = () => {
  const [jobs] = useState(dummyJobs);

  const handleApply = (jobId: number) => {
    // In a real app, this would handle the application process
    alert(`Application submitted for job #${jobId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Job</h1>
        <p className="mt-2 text-lg text-gray-600">
          Browse through exciting opportunities perfect for teens
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            description={job.description}
            onApply={() => handleApply(job.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
