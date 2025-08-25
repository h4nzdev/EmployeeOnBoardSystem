import {
  Users,
  UserPlus,
  Clock,
  CalendarX,
  MoreHorizontal,
  Download,
  Plus,
} from "lucide-react";
import HRDashboardStats from "../components/HRDashboard/HRDashboardStats";

export default function HRDashboard() {
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
      name: "David Thompson",
      email: "david.thompson@company.com",
      role: "Marketing Director",
      department: "Marketing",
      status: "Active",
      joinDate: "2021-11-05",
      avatar: "DT",
    },
    {
      id: 5,
      name: "Emily Zhang",
      email: "emily.zhang@company.com",
      role: "Data Analyst",
      department: "Analytics",
      status: "Pending",
      joinDate: "2024-08-20",
      avatar: "EZ",
    },
    {
      id: 6,
      name: "James Wilson",
      email: "james.wilson@company.com",
      role: "Sales Manager",
      department: "Sales",
      status: "Active",
      joinDate: "2022-02-14",
      avatar: "JW",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">
            Good morning, John 👋
          </h2>
          <p className="text-slate-400">
            Here's what's happening with your team today.
          </p>
        </div>

        {/* Stats Grid */}
        <HRDashboardStats employees={employees} />

        {/* Recent Employees Table */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Recent Employees
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Manage your team members and their account permissions
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
                  <tr
                    key={employee.id}
                    className="hover:bg-slate-800/60 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {employee.avatar}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-slate-100">
                            {employee.name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-200">
                      {employee.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-400">
                      {employee.department}
                    </td>
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
                    <td className="py-4 px-6 text-sm text-slate-400">
                      {employee.joinDate}
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

          <div className="px-6 py-4 border-t border-slate-200">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Showing 1 to 6 of 247 results</span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-50 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
