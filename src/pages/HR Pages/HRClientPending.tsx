import {
  User,
  Clock,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function HRClientPending() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Client Pending
        </h2>
        <p className="text-slate-400">
          Manage clients awaiting approval and processing
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total Pending</p>
              <p className="text-2xl font-bold text-slate-100">15</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Documents Review</p>
              <p className="text-2xl font-bold text-slate-100">8</p>
            </div>
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Urgent</p>
              <p className="text-2xl font-bold text-slate-100">3</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">This Week</p>
              <p className="text-2xl font-bold text-slate-100">12</p>
            </div>
            <User className="w-8 h-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Pending Clients Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-100">
              Pending Clients
            </h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Approve All
              </button>
              <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm rounded-lg hover:bg-slate-600">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">JD</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-100">
                        John Doe
                      </div>
                      <div className="text-sm text-slate-400">
                        john.doe@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  New Registration
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                    Document Review
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
                    High
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                  2 hours ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-green-400 hover:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <XCircle className="w-4 h-4" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">SM</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-100">
                        Sarah Miller
                      </div>
                      <div className="text-sm text-slate-400">
                        sarah.miller@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  Profile Update
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded-full">
                    Verification
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                  5 hours ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-green-400 hover:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <XCircle className="w-4 h-4" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">MJ</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-100">
                        Mike Johnson
                      </div>
                      <div className="text-sm text-slate-400">
                        mike.johnson@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  Account Upgrade
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-orange-900 text-orange-300 text-xs font-medium rounded-full">
                    Payment Review
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-green-900 text-green-300 text-xs font-medium rounded-full">
                    Low
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                  1 day ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-green-400 hover:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <XCircle className="w-4 h-4" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">EB</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-100">
                        Emily Brown
                      </div>
                      <div className="text-sm text-slate-400">
                        emily.brown@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  New Registration
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                    Document Review
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
                    High
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                  3 hours ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-green-400 hover:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <XCircle className="w-4 h-4" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">DW</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-100">
                        David Wilson
                      </div>
                      <div className="text-sm text-slate-400">
                        david.wilson@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  Service Request
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded-full">
                    Verification
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                  6 hours ago
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-green-400 hover:text-green-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <XCircle className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
