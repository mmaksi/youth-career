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
      <section className="relative text-center py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your First Job Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-50">
            Discover exciting opportunities, build your skills, and take the first step towards your
            future career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/jobs"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Browse Jobs
            </Link>
            <Link
              to="/resume-builder"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              Create Resume
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
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
