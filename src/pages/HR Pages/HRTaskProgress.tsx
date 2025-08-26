import { MoreHorizontal, Download, Plus, Filter, Search } from "lucide-react"

export default function HRTaskProgress() {
  const tasks = [
    {
      id: 1,
      title: "Website Redesign",
      assignee: "John Smith",
      priority: "High",
      status: "In Progress",
      category: "Design",
      startDate: "2024-08-15",
      dueDate: "2024-09-15",
      progress: 65,
      description: "Complete redesign of company website with modern UI/UX",
    },
    {
      id: 2,
      title: "Database Migration",
      assignee: "Sarah Johnson",
      priority: "High",
      status: "Not Started",
      category: "Development",
      startDate: "2024-09-01",
      dueDate: "2024-09-30",
      progress: 0,
      description: "Migrate legacy database to new cloud infrastructure",
    },
    {
      id: 3,
      title: "User Testing",
      assignee: "Michael Chen",
      priority: "Medium",
      status: "Completed",
      category: "QA",
      startDate: "2024-08-20",
      dueDate: "2024-09-05",
      progress: 100,
      description: "Conduct user testing sessions for new features",
    },
    {
      id: 4,
      title: "API Documentation",
      assignee: "Emily Davis",
      priority: "Medium",
      status: "In Progress",
      category: "Documentation",
      startDate: "2024-08-25",
      dueDate: "2024-09-20",
      progress: 40,
      description: "Create comprehensive API documentation for developers",
    },
    {
      id: 5,
      title: "Security Audit",
      assignee: "Robert Wilson",
      priority: "Low",
      status: "On Hold",
      category: "Security",
      startDate: "2024-09-10",
      dueDate: "2024-10-15",
      progress: 15,
      description: "Comprehensive security audit of all systems",
    },
    {
      id: 6,
      title: "Mobile App Testing",
      assignee: "Lisa Anderson",
      priority: "Medium",
      status: "In Progress",
      category: "QA",
      startDate: "2024-08-30",
      dueDate: "2024-09-25",
      progress: 75,
      description: "Test mobile application across different devices",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-900/30 text-green-300 border border-green-900"
      case "In Progress":
        return "bg-blue-900/30 text-blue-300 border border-blue-900"
      case "Not Started":
        return "bg-yellow-900/30 text-yellow-300 border border-yellow-900"
      case "On Hold":
        return "bg-slate-800 text-slate-300 border border-slate-700"
      default:
        return "bg-slate-800 text-slate-300 border border-slate-700"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-900/30 text-red-300 border border-red-900"
      case "Medium":
        return "bg-orange-900/30 text-orange-300 border border-orange-900"
      case "Low":
        return "bg-gray-800 text-gray-300 border border-gray-700"
      default:
        return "bg-gray-800 text-gray-300 border border-gray-700"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-600"
    if (progress >= 50) return "bg-blue-600"
    if (progress >= 25) return "bg-yellow-600"
    return "bg-red-600"
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Task Progress</h2>
        <p className="text-slate-400">Track project tasks and monitor completion progress.</p>
      </div>

      {/* Task Progress Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Project Tasks</h3>
              <p className="text-sm text-slate-400 mt-1">Monitor task progress and manage project deliverables</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search tasks..."
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
                <span>Add Task</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Task
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Assignee
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Progress
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
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-800/60 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-slate-100">{task.title}</div>
                      <div className="text-sm text-slate-400 mt-1">{task.category}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-200">{task.assignee}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                        task.priority,
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        task.status,
                      )}`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressColor(task.progress)}`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-slate-300 min-w-[3rem]">{task.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">{task.dueDate}</td>
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
            <span>Showing 1 to 6 of 18 results</span>
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
  )
}
