import { useState } from 'react';

interface ReportedContent {
  id: number;
  type: 'job' | 'resume' | 'user';
  reporterId: number;
  reportedId: number;
  reason: string;
  status: 'pending' | 'reviewed' | 'resolved';
  timestamp: string;
  details: string;
}

interface SafetyAlert {
  id: number;
  type: 'suspicious_activity' | 'inappropriate_content' | 'age_verification';
  userId: number;
  description: string;
  severity: 'low' | 'medium' | 'high';
  status: 'active' | 'resolved';
  timestamp: string;
}

const dummyReports: ReportedContent[] = [
  {
    id: 1,
    type: 'job',
    reporterId: 101,
    reportedId: 201,
    reason: 'Suspicious job posting',
    status: 'pending',
    timestamp: '2024-03-25T10:30:00',
    details: 'Job posting seems to target minors inappropriately',
  },
  {
    id: 2,
    type: 'user',
    reporterId: 102,
    reportedId: 202,
    reason: 'Inappropriate behavior',
    status: 'reviewed',
    timestamp: '2024-03-24T15:45:00',
    details: 'User sending inappropriate messages to other users',
  },
];

const dummyAlerts: SafetyAlert[] = [
  {
    id: 1,
    type: 'age_verification',
    userId: 301,
    description: 'Multiple failed age verification attempts',
    severity: 'high',
    status: 'active',
    timestamp: '2024-03-25T09:15:00',
  },
  {
    id: 2,
    type: 'suspicious_activity',
    userId: 302,
    description: 'Unusual number of job applications in short time',
    severity: 'medium',
    status: 'resolved',
    timestamp: '2024-03-24T14:20:00',
  },
];

const ModerationDashboard = () => {
  const [reports, setReports] = useState<ReportedContent[]>(dummyReports);
  const [alerts, setAlerts] = useState<SafetyAlert[]>(dummyAlerts);
  const [selectedTab, setSelectedTab] = useState<'reports' | 'alerts' | 'settings'>('reports');

  const handleReportStatusChange = (reportId: number, newStatus: ReportedContent['status']) => {
    setReports((prev) =>
      prev.map((report) => (report.id === reportId ? { ...report, status: newStatus } : report))
    );
  };

  const handleAlertStatusChange = (alertId: number, newStatus: SafetyAlert['status']) => {
    setAlerts((prev) =>
      prev.map((alert) => (alert.id === alertId ? { ...alert, status: newStatus } : alert))
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Safety & Moderation Dashboard</h1>

        {/* Tab Navigation */}
        <div className="border-b mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setSelectedTab('reports')}
              className={`pb-4 px-1 border-b-2 font-medium ${
                selectedTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reported Content
            </button>
            <button
              onClick={() => setSelectedTab('alerts')}
              className={`pb-4 px-1 border-b-2 font-medium ${
                selectedTab === 'alerts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Safety Alerts
            </button>
            <button
              onClick={() => setSelectedTab('settings')}
              className={`pb-4 px-1 border-b-2 font-medium ${
                selectedTab === 'settings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Safety Settings
            </button>
          </nav>
        </div>

        {/* Content Area */}
        {selectedTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">Reported Content</h2>
              <div className="flex space-x-4">
                <select className="rounded-md border-gray-300">
                  <option value="all">All Types</option>
                  <option value="job">Jobs</option>
                  <option value="resume">Resumes</option>
                  <option value="user">Users</option>
                </select>
                <select className="rounded-md border-gray-300">
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                          {report.type}
                        </span>
                        <span
                          className={`px-2 py-1 text-sm rounded-full ${
                            report.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : report.status === 'reviewed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mt-2">Report #{report.id}</h3>
                      <p className="text-gray-600 mt-1">{report.reason}</p>
                      <p className="text-sm text-gray-500 mt-2">{report.details}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleReportStatusChange(report.id, 'reviewed')}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200"
                      >
                        Mark Reviewed
                      </button>
                      <button
                        onClick={() => handleReportStatusChange(report.id, 'resolved')}
                        className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200"
                      >
                        Resolve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'alerts' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">Safety Alerts</h2>
              <div className="flex space-x-4">
                <select className="rounded-md border-gray-300">
                  <option value="all">All Types</option>
                  <option value="suspicious_activity">Suspicious Activity</option>
                  <option value="inappropriate_content">Inappropriate Content</option>
                  <option value="age_verification">Age Verification</option>
                </select>
                <select className="rounded-md border-gray-300">
                  <option value="all">All Severities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-800">
                          {alert.type.replace('_', ' ')}
                        </span>
                        <span
                          className={`px-2 py-1 text-sm rounded-full ${
                            alert.severity === 'high'
                              ? 'bg-red-100 text-red-800'
                              : alert.severity === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {alert.severity}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mt-2">Alert #{alert.id}</h3>
                      <p className="text-gray-600 mt-1">{alert.description}</p>
                    </div>
                    <button
                      onClick={() => handleAlertStatusChange(alert.id, 'resolved')}
                      className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200"
                    >
                      Resolve Alert
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Safety Settings</h2>

            <div className="space-y-6">
              {/* Age Verification Settings */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Age Verification</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Require Age Verification</p>
                      <p className="text-sm text-gray-600">
                        Verify user age before allowing job applications
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Minimum Age</p>
                      <p className="text-sm text-gray-600">
                        Set the minimum age required to use the platform
                      </p>
                    </div>
                    <select className="rounded-md border-gray-300">
                      <option value="13">13 years</option>
                      <option value="14">14 years</option>
                      <option value="15">15 years</option>
                      <option value="16">16 years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Content Moderation Settings */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Content Moderation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-Moderation</p>
                      <p className="text-sm text-gray-600">
                        Automatically flag potentially inappropriate content
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Job Posting Review</p>
                      <p className="text-sm text-gray-600">
                        Require manual review of all job postings
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Communication Settings */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Communication Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Safe Messaging</p>
                      <p className="text-sm text-gray-600">Enable content filtering in messages</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Parental Notifications</p>
                      <p className="text-sm text-gray-600">
                        Send notifications to parents about account activity
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModerationDashboard;
