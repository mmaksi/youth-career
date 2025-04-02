import { Link } from 'react-router-dom';
import { HomeIcon, BriefcaseIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                TeenJobBoard
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-indigo-600"
              >
                <HomeIcon className="h-6 w-6 mr-1" />
                Home
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-indigo-600"
              >
                <BriefcaseIcon className="h-6 w-6 mr-1" />
                Jobs
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-indigo-600"
              >
                <DocumentTextIcon className="h-6 w-6 mr-1" />
                Resume Builder
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/profile"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <UserIcon className="h-5 w-5 mr-1" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
