import { BrowserRouter, Route, Routes } from "react-router-dom";
import HRDashboard from "./pages/HRDashboard";
import MainLayout from "./layout/MainLayout";
import HREmployees from "./pages/HREmployees";
import HRReports from "./pages/HRReports";
import HRTimeOff from "./pages/HRTimeOff";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
