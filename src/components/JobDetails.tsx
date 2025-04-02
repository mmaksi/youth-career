import { Link } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  postedDate: string;
  fullDescription: string;
  benefits: string[];
  applicationProcess: string[];
}

const dummyJob: Job = {
  id: 1,
  title: 'Summer Camp Counselor',
  company: 'Sunshine Camps',
  location: 'Mountain View, CA',
  description:
    'Looking for energetic teens to lead summer camp activities and mentor younger campers.',
  requirements: ['Age 16+', 'First Aid certification preferred', 'Experience with children'],
  salary: '$15/hour',
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
  const job = dummyJob; // In a real app, this would fetch based on ID

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <p className="text-xl text-gray-600 mb-2">{job.company}</p>
          <p className="text-gray-500 mb-4">{job.location}</p>
          <div className="flex items-center space-x-4">
            <span className="text-green-600 font-semibold">{job.salary}</span>
            <span className="text-gray-500">Posted: {job.postedDate}</span>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Description</h2>
            <div className="prose max-w-none">
              {job.fullDescription.split('\n').map((line, index) => (
                <p key={index} className="text-gray-700 mb-2">
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Application Process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {job.applicationProcess.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <div className="flex justify-center space-x-4 pt-8">
            <Link
              to="/resume-builder"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Create Resume
            </Link>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
