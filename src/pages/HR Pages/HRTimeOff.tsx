import { Calendar, CalendarCheck, CalendarX, Download, Filter, MoreHorizontal, Search } from "lucide-react";

const HRTimeOff = () => {
  const requests = [
    {
      id: 1,
      employee: "Alexandra Chen",
      email: "alexandra.chen@company.com",
      type: "Vacation",
      start: "2024-09-02",
      end: "2024-09-06",
      days: 5,
      status: "Pending",
      avatar: "AC",
    },
    {
      id: 2,
      employee: "Marcus Rodriguez",
      email: "marcus.rodriguez@company.com",
      type: "Sick Leave",
      start: "2024-09-03",
      end: "2024-09-04",
      days: 2,
      status: "Approved",
      avatar: "MR",
    },
    {
      id: 3,
      employee: "Sarah Kim",
      email: "sarah.kim@company.com",
      type: "Work From Home",
      start: "2024-09-05",
      end: "2024-09-05",
      days: 1,
      status: "Rejected",
      avatar: "SK",
    },
    {
      id: 4,
      employee: "Emily Zhang",
      email: "emily.zhang@company.com",
      type: "Vacation",
      start: "2024-09-10",
      end: "2024-09-12",
      days: 3,
      status: "Pending",
      avatar: "EZ",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Time Off</h2>
            <p className="text-slate-400 mt-2">Review and manage time off requests.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>New Request</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm mb-6">
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search employees or requests..."
                  className="w-full pl-10 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200">
              <option>All Types</option>
              <option>Vacation</option>
              <option>Sick Leave</option>
              <option>Work From Home</option>
            </select>
            <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filters are static for now</span>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Pending Requests</p>
              <p className="text-2xl font-bold text-slate-100">8</p>
            </div>
            <div className="w-10 h-10 bg-amber-900/30 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Approved</p>
              <p className="text-2xl font-bold text-slate-100">24</p>
            </div>
            <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Rejected</p>
              <p className="text-2xl font-bold text-slate-100">3</p>
            </div>
            <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center">
              <CalendarX className="w-5 h-5 text-red-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Employee</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Type</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Start</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">End</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Days</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
                <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-slate-800/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{r.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium text-slate-100">{r.employee}</div>
                        <div className="text-sm text-slate-400">{r.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-200">{r.type}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">{r.start}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">{r.end}</td>
                  <td className="py-4 px-6 text-sm text-slate-200">{r.days}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        r.status === "Approved"
                          ? "bg-green-900/30 text-green-300 border border-green-900"
                          : r.status === "Pending"
                          ? "bg-amber-900/30 text-amber-300 border border-amber-900"
                          : "bg-red-900/30 text-red-300 border border-red-900"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
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
            <span>Showing 1 to {requests.length} of 15 results</span>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-slate-700 rounded text-slate-300 hover:bg-slate-800 transition-colors">Previous</button>
              <button className="px-3 py-1 border border-slate-700 rounded text-slate-300 hover:bg-slate-800 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRTimeOff;


