import { Link } from 'react-router-dom';
import { BriefcaseIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Teen Job</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover exciting opportunities perfect for teens like you
        </p>
        <Link
          to="/jobs"
          className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Browse Jobs
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <BriefcaseIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Browse Jobs</h3>
          <p className="text-gray-600">
            Find the perfect job opportunity that matches your skills and interests
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <DocumentTextIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Create Resume</h3>
          <p className="text-gray-600">
            Build a professional resume to stand out to potential employers
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <UserIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Apply & Connect</h3>
          <p className="text-gray-600">
            Apply to jobs and connect with employers looking for teen talent
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tips for Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Create a Strong Resume</h3>
            <p className="text-gray-600">
              Highlight your skills, education, and any volunteer work or extracurricular
              activities. Make sure to proofread and keep it professional.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Be Professional</h3>
            <p className="text-gray-600">
              Dress appropriately for interviews, arrive on time, and communicate clearly. Show
              enthusiasm and a positive attitude.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Research the Company</h3>
            <p className="text-gray-600">
              Learn about the company before your interview. This shows initiative and helps you ask
              relevant questions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Follow Up</h3>
            <p className="text-gray-600">
              Send a thank-you note after interviews and follow up on your applications. This
              demonstrates your interest and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
