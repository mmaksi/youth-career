import { useState, useEffect } from 'react';

interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  education: {
    school: string;
    grade: string;
    gpa: string;
    achievements: string[];
  };
  experience: {
    title: string;
    organization: string;
    duration: string;
    description: string;
  }[];
  skills: string[];
  interests: string[];
}

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
    },
    education: {
      school: '',
      grade: '',
      gpa: '',
      achievements: [''],
    },
    experience: [
      {
        title: '',
        organization: '',
        duration: '',
        description: '',
      },
    ],
    skills: [''],
    interests: [''],
  });

  const [saveStatus, setSaveStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [isViewMode, setIsViewMode] = useState(false);

  // Load saved resume when component mounts
  useEffect(() => {
    const savedResume = localStorage.getItem('resumeData');
    if (savedResume) {
      try {
        const parsedResume = JSON.parse(savedResume);
        setResumeData(parsedResume);
      } catch (error) {
        console.error('Failed to load saved resume:', error);
      }
    }
  }, []);

  const handlePersonalInfoChange = (field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const handleEducationChange = (
    field: keyof ResumeData['education'],
    value: string | string[]
  ) => {
    setResumeData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [field]: value,
      },
    }));
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp)),
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: '',
          organization: '',
          duration: '',
          description: '',
        },
      ],
    }));
  };

  const handleSkillsChange = (index: number, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }));
  };

  const addSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, ''],
    }));
  };

  const handleInterestsChange = (index: number, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      interests: prev.interests.map((interest, i) => (i === index ? value : interest)),
    }));
  };

  const addInterest = () => {
    setResumeData((prev) => ({
      ...prev,
      interests: [...prev.interests, ''],
    }));
  };

  const validateResume = (): string | null => {
    const { personalInfo, education } = resumeData;

    if (!personalInfo.name.trim()) return 'Please enter your name';
    if (!personalInfo.email.trim()) return 'Please enter your email';
    if (!personalInfo.phone.trim()) return 'Please enter your phone number';
    if (!personalInfo.location.trim()) return 'Please enter your location';
    if (!education.school.trim()) return 'Please enter your school';
    if (!education.grade.trim()) return 'Please enter your grade';

    return null;
  };

  const handleSave = () => {
    const error = validateResume();
    if (error) {
      setSaveStatus({
        type: 'error',
        message: error,
      });
      return;
    }

    try {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      setSaveStatus({
        type: 'success',
        message: 'Resume saved successfully!',
      });
    } catch {
      setSaveStatus({
        type: 'error',
        message: 'Failed to save resume. Please try again.',
      });
    }
  };

  const FormattedResume = () => (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{resumeData.personalInfo.name}</h1>
        <div className="text-gray-600 mt-2">
          <p>{resumeData.personalInfo.email}</p>
          <p>{resumeData.personalInfo.phone}</p>
          <p>{resumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
        <div className="text-gray-700">
          <p className="font-medium">{resumeData.education.school}</p>
          <p>Grade: {resumeData.education.grade}</p>
          {resumeData.education.gpa && <p>GPA: {resumeData.education.gpa}</p>}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-medium text-gray-900">{exp.title}</h3>
            <p className="text-gray-600">{exp.organization}</p>
            <p className="text-gray-500 text-sm">{exp.duration}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.interests.map((interest, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <div className="space-x-4">
            <button
              onClick={() => setIsViewMode(!isViewMode)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {isViewMode ? 'Edit Resume' : 'View Resume'}
            </button>
            {!isViewMode && (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Save Resume
              </button>
            )}
          </div>
        </div>

        {saveStatus && (
          <div
            className={`mb-4 p-4 rounded-md ${
              saveStatus.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {saveStatus.message}
          </div>
        )}

        {isViewMode ? (
          <FormattedResume />
        ) : (
          <div className="space-y-8">
            {/* Personal Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">School</label>
                  <input
                    type="text"
                    value={resumeData.education.school}
                    onChange={(e) => handleEducationChange('school', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Grade</label>
                  <input
                    type="text"
                    value={resumeData.education.grade}
                    onChange={(e) => handleEducationChange('grade', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">GPA</label>
                  <input
                    type="text"
                    value={resumeData.education.gpa}
                    onChange={(e) => handleEducationChange('gpa', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 border rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={exp.organization}
                        onChange={(e) =>
                          handleExperienceChange(index, 'organization', e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration</label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) =>
                          handleExperienceChange(index, 'description', e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={addExperience}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add Experience
              </button>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter a skill"
                  />
                </div>
              ))}
              <button
                onClick={addSkill}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add Skill
              </button>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interests</h2>
              {resumeData.interests.map((interest, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={interest}
                    onChange={(e) => handleInterestsChange(index, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter an interest"
                  />
                </div>
              ))}
              <button
                onClick={addInterest}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add Interest
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
