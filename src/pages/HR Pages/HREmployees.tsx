import {
  Search,
  Filter,
  Plus,
  Download,
  MoreHorizontal,
  Users,
} from "lucide-react";

const HREmployees = () => {
  const employees = [
    {
      id: 1,
      name: "Alexandra Chen",
      email: "alexandra.chen@company.com",
      role: "Senior Software Engineer",
      department: "Engineering",
      status: "Active",
      joinDate: "2023-01-15",
      avatar: "AC",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus.rodriguez@company.com",
      role: "Product Manager",
      department: "Product",
      status: "Active",
      joinDate: "2022-08-22",
      avatar: "MR",
    },
    {
      id: 3,
      name: "Sarah Kim",
      email: "sarah.kim@company.com",
      role: "UX Designer",
      department: "Design",
      status: "On Leave",
      joinDate: "2023-03-10",
      avatar: "SK",
    },
    {
      id: 4,
      name: "Emily Zhang",
      email: "emily.zhang@company.com",
      role: "Data Analyst",
      department: "Analytics",
      status: "Pending",
      joinDate: "2024-08-20",
      avatar: "EZ",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Employees</h2>
            <p className="text-slate-400 mt-2">
              View and manage your organization's employee directory.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Employee</span>
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
                  placeholder="Search employees..."
                  className="w-full pl-10 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Product</option>
              <option>Design</option>
              <option>Analytics</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
            <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>On Leave</option>
              <option>Inactive</option>
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
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Total Employees</p>
            <p className="text-2xl font-bold text-slate-100">247</p>
          </div>
          <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
          <p className="text-sm text-slate-400">Active</p>
          <p className="text-2xl font-bold text-slate-100">219</p>
        </div>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
          <p className="text-sm text-slate-400">On Leave</p>
          <p className="text-2xl font-bold text-slate-100">11</p>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Employee
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Department
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-slate-800/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{employee.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium text-slate-100">{employee.name}</div>
                        <div className="text-sm text-slate-400">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-200">{employee.role}</td>
                  <td className="py-4 px-6 text-sm text-slate-400">{employee.department}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        employee.status === "Active"
                          ? "bg-green-900/30 text-green-300 border border-green-900"
                          : employee.status === "Pending"
                          ? "bg-yellow-900/30 text-yellow-300 border border-yellow-900"
                          : "bg-slate-800 text-slate-300 border border-slate-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">{employee.joinDate}</td>
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
            <span>Showing 1 to {employees.length} of 247 results</span>
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

export default HREmployees;
