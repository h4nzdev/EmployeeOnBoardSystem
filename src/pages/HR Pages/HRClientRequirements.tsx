import { MoreHorizontal, Download, Plus, Filter, Search } from "lucide-react";

export default function HRClientRequirements() {
  const requirements = [
    {
      id: 1,
      title: "Government ID",
      client: "John Smith",
      priority: "High",
      status: "Submitted",
      type: "Identity Verification",
      dueDate: "2024-09-15",
      submittedDate: "2024-08-28",
      description: "Driver's license or passport for identity verification",
    },
    {
      id: 2,
      title: "Resume/CV",
      client: "Sarah Johnson",
      priority: "High",
      status: "Pending",
      type: "Employment",
      dueDate: "2024-09-10",
      submittedDate: null,
      description: "Updated resume with recent work experience",
    },
    {
      id: 3,
      title: "Background Check",
      client: "Michael Chen",
      priority: "Medium",
      status: "In Progress",
      type: "Verification",
      dueDate: "2024-09-20",
      submittedDate: "2024-09-01",
      description: "Criminal background check clearance",
    },
    {
      id: 4,
      title: "References",
      client: "Emily Davis",
      priority: "Medium",
      status: "Submitted",
      type: "Employment",
      dueDate: "2024-09-12",
      submittedDate: "2024-09-05",
      description: "Three professional references with contact information",
    },
    {
      id: 5,
      title: "Tax Documents",
      client: "Robert Wilson",
      priority: "Low",
      status: "Pending",
      type: "Financial",
      dueDate: "2024-09-30",
      submittedDate: null,
      description: "W-2 forms and tax returns for income verification",
    },
    {
      id: 6,
      title: "Certifications",
      client: "Lisa Anderson",
      priority: "Medium",
      status: "Submitted",
      type: "Professional",
      dueDate: "2024-09-18",
      submittedDate: "2024-09-03",
      description: "Professional certifications and licenses",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-green-900/30 text-green-300 border border-green-900";
      case "Pending":
        return "bg-yellow-900/30 text-yellow-300 border border-yellow-900";
      case "In Progress":
        return "bg-blue-900/30 text-blue-300 border border-blue-900";
      case "On Hold":
        return "bg-slate-800 text-slate-300 border border-slate-700";
      default:
        return "bg-slate-800 text-slate-300 border border-slate-700";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-900/30 text-red-300 border border-red-900";
      case "Medium":
        return "bg-orange-900/30 text-orange-300 border border-orange-900";
      case "Low":
        return "bg-gray-800 text-gray-300 border border-gray-700";
      default:
        return "bg-gray-800 text-gray-300 border border-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Client Requirements
        </h2>
        <p className="text-slate-400">
          Track document submissions and requirements.
        </p>
      </div>

      {/* Requirements Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                Document Requirements
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Manage client document submissions and track their status
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2 border border-slate-700 rounded-lg">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
              <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Document</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Document
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {requirements.map((requirement) => (
                <tr
                  key={requirement.id}
                  className="hover:bg-slate-800/60 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-slate-100">
                        {requirement.title}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">
                        {requirement.type}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-200">
                    {requirement.client}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                        requirement.priority
                      )}`}
                    >
                      {requirement.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        requirement.status
                      )}`}
                    >
                      {requirement.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">
                    {requirement.submittedDate || "Not submitted"}
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">
                    {requirement.dueDate}
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
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>Showing 1 to 6 of 24 results</span>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-800 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-800 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
