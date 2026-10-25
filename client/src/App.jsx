import { useState } from "react";
import StatsBar from "./components/StatsBar";
import ApplicationList from "./components/ApplicationList";
import ApplicationForm from "./components/ApplicationForm";
const initialApplications = [
  {
    id: 1,
    company: "Acme Corp",
    title: "Frontend Engineer",
    date: "2026-10-15",
    status: "Applied",
    url: "https://acme.example.com/jobs/123",
    notes: "Referred by Sam.",
  },
  {
    id: 2,
    company: "Beta Labs",
    title: "Full Stack Developer",
    date: "2026-10-20",
    status: "Interview",
    url: "",
    notes: "Phone screen scheduled for Friday.",
  },
];
function App() {
  const [applications, setApplications] = useState(initialApplications);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">ApplyTrack</h1>
          <p className="text-sm text-gray-600 mt-1">
            Track your job applications in one place.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <StatsBar applications={applications} />
        <ApplicationForm />
        <ApplicationList applications={applications} />
      </main>
    </div>
  );
}

export default App;
