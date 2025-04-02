import { useState } from 'react';
import ReportForm from './ReportForm';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  type: string;
  postedDate: string;
  fullDescription: string;
  benefits: string[];
  applicationProcess: string[];
}

const dummyJob: Job = {
  id: 1,
  title: 'Junior Web Developer',
  company: 'Tech Solutions Inc.',
  location: 'Remote',
  description: 'We are looking for a talented junior web developer to join our team...',
  requirements: [
    'Basic knowledge of HTML, CSS, and JavaScript',
    'Understanding of React and TypeScript',
    'Good communication skills',
    'Ability to work in a team environment',
  ],
  salary: '$15-20/hour',
  type: 'Part-time',
  postedDate: '2024-03-25',
  fullDescription: `We are seeking enthusiastic and responsible teens to join our summer camp team! As a camp counselor, you'll have the opportunity to:
  • Lead exciting outdoor activities and games
  • Mentor younger campers and help them develop new skills
  • Create a fun and safe environment for all participants
  • Work with a team of other teen counselors
  • Make lasting friendships and memories`,
  benefits: [
    'Competitive hourly wage',
    'Free camp activities and meals',
    'Leadership experience',
    'First Aid training provided',
    'Flexible scheduling',
  ],
  applicationProcess: [
    'Submit your application online',
    'Attend a brief interview',
    'Complete background check',
    'Participate in orientation training',
  ],
};

const JobDetails = () => {
  const [showReportForm, setShowReportForm] = useState(false);
  const job = dummyJob; // In a real app, this would be fetched based on the ID

  const handleReport = (report: { jobId: number; reason: string; details: string }) => {
    // In a real app, this would send the report to the backend
    console.log('Report submitted:', report);
    // Show a success message to the user
    alert('Thank you for your report. Our team will review it shortly.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <p className="text-xl text-gray-600">{job.company}</p>
          </div>
          <button
            onClick={() => setShowReportForm(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Report Job
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">Location</p>
            <p className="font-medium">{job.location}</p>
          </div>
          <div>
            <p className="text-gray-600">Salary</p>
            <p className="font-medium">{job.salary}</p>
          </div>
          <div>
            <p className="text-gray-600">Job Type</p>
            <p className="font-medium">{job.type}</p>
          </div>
          <div>
            <p className="text-gray-600">Posted Date</p>
            <p className="font-medium">{job.postedDate}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </div>

      {showReportForm && (
        <ReportForm
          jobId={job.id}
          jobTitle={job.title}
          onClose={() => setShowReportForm(false)}
          onSubmit={handleReport}
        />
      )}
    </div>
  );
};

export default JobDetails;
