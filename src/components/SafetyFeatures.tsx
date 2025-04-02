import {
  ShieldCheckIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const SafetyFeatures = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Your Safety is Our Priority
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <ShieldCheckIcon className="h-8 w-8 text-green-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Verified Employers</h3>
            <p className="text-gray-600">
              All employers are thoroughly vetted and verified before posting jobs. We check
              business licenses and conduct background screenings.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <UserGroupIcon className="h-8 w-8 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Parent/Guardian Involvement</h3>
            <p className="text-gray-600">
              Parents or guardians can review job applications and communications. We encourage open
              dialogue about job opportunities.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Safe Communication</h3>
            <p className="text-gray-600">
              All communications happen through our secure platform. No personal contact information
              is shared until you're hired.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Report & Block</h3>
            <p className="text-gray-600">
              Easy-to-use reporting system for any concerns. Block unwanted communications
              instantly.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Safety Guidelines</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Never share personal information outside the platform</li>
          <li>Always meet employers in public places</li>
          <li>Tell a parent or guardian about any job interviews</li>
          <li>Report any suspicious behavior immediately</li>
          <li>Trust your instincts - if something feels wrong, it probably is</li>
        </ul>
      </div>
    </div>
  );
};

export default SafetyFeatures;
