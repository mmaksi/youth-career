import { Link } from 'react-router-dom';

interface NavbarProps {
  isAdmin: boolean;
  isLoggedIn: boolean;
  setIsAdmin: (value: boolean) => void;
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar = ({ isAdmin, isLoggedIn, setIsAdmin, setIsLoggedIn }: NavbarProps) => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            YouthCareer
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/resume-builder" className="text-gray-700 hover:text-blue-600">
              Resume Builder
            </Link>
            {isAdmin && (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-blue-600">
                  Admin Dashboard
                </Link>
                <Link to="/moderation" className="text-gray-700 hover:text-blue-600">
                  Safety & Moderation
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsAdmin(true);
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Login as Admin
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsAdmin(false);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
