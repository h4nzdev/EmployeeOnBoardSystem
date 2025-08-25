import { Download, FileText, Filter, MoreHorizontal, Search } from "lucide-react";

const HRReports = () => {
  const reports = [
    {
      id: 1,
      title: "Monthly Headcount Summary",
      type: "Workforce",
      createdOn: "2024-08-01",
      status: "Ready",
      size: "1.2 MB",
    },
    {
      id: 2,
      title: "New Hires - Q3",
      type: "Recruiting",
      createdOn: "2024-08-12",
      status: "Ready",
      size: "820 KB",
    },
    {
      id: 3,
      title: "Time Off - This Month",
      type: "Attendance",
      createdOn: "2024-08-18",
      status: "Processing",
      size: "-",
    },
    {
      id: 4,
      title: "Performance Reviews - Due",
      type: "Performance",
      createdOn: "2024-08-20",
      status: "Ready",
      size: "640 KB",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Reports</h2>
            <p className="text-slate-400 mt-2">Generate and manage HR reports.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export All</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>New Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm mb-6">
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="w-full pl-10 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200">
              <option>All Types</option>
              <option>Workforce</option>
              <option>Recruiting</option>
              <option>Attendance</option>
              <option>Performance</option>
            </select>
          </div>
        </div>
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filters are static for now</span>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Report
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Created On
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Size
                </th>
                <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-800/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-100">{report.title}</div>
                        <div className="text-sm text-slate-400">Auto-generated, static data</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-200">{report.type}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">{report.createdOn}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        report.status === "Ready"
                          ? "bg-green-900/30 text-green-300 border border-green-900"
                          : "bg-amber-900/30 text-amber-300 border border-amber-900"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">{report.size}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-slate-500 hover:text-slate-300 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-800">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>Showing 1 to {reports.length} of 48 results</span>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-slate-700 rounded text-slate-300 hover:bg-slate-800 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 border border-slate-700 rounded text-slate-300 hover:bg-slate-800 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRReports;


