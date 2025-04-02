import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Find Teen-Friendly Jobs',
    description:
      'Browse through carefully curated job listings specifically designed for teenagers.',
    icon: '🎯',
  },
  {
    title: 'Build Your Resume',
    description: 'Create a professional resume with our easy-to-use resume builder.',
    icon: '📝',
  },
  {
    title: 'Apply with Confidence',
    description: 'Apply to jobs with your professional resume and stand out to employers.',
    icon: '💼',
  },
  {
    title: 'Track Applications',
    description: 'Keep track of all your job applications in one place.',
    icon: '📊',
  },
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-6">Find Your First Job</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          The perfect platform for teenagers to discover job opportunities, build resumes, and start
          their career journey.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/jobs"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            to="/resume-builder"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
          >
            Create Resume
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose YouthCareer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
            <p className="text-gray-600">Sign up and create your professional profile</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Build Your Resume</h3>
            <p className="text-gray-600">Use our resume builder to create a standout resume</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Apply for Jobs</h3>
            <p className="text-gray-600">Browse jobs and apply with your professional resume</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Job Search?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of teens who have found their perfect job through YouthCareer.
        </p>
        <Link
          to="/jobs"
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
