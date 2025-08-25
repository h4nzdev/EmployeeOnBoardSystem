import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HRDashboard from "./pages/HRDashboard";
import MainLayout from "./layout/MainLayout";
import HREmployees from "./pages/HREmployees";
import HRReports from "./pages/HRReports";
import HRTimeOff from "./pages/HRTimeOff";
import HRClientRequirements from "./pages/HRClientRequirements";
import TaskProgressPage from "./pages/HRTaskProgress";
import SettingsPage from "./pages/HRSettings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <HRDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/employees"
          element={
            <MainLayout>
              <HREmployees />
            </MainLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <MainLayout>
              <HRReports />
            </MainLayout>
          }
        />
        <Route
          path="/time-off"
          element={
            <MainLayout>
              <HRTimeOff />
            </MainLayout>
          }
        />
        <Route
          path="/client-requirements"
          element={
            <MainLayout>
              <HRClientRequirements />
            </MainLayout>
          }
        />
        <Route
          path="/tasks-progress"
          element={
            <MainLayout>
              <TaskProgressPage />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <SettingsPage />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
