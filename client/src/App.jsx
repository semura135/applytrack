import { useState, useEffect } from "react";
import { api } from "./api";
import StatsBar from "./components/StatsBar";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const data = await api.getAll();
        setApplications(data.map((app) => ({ ...app, id: app._id })));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  const refetch = () => {
    setLoading(true);
    api
      .getAll()
      .then((data) => {
        setApplications(data.map((app) => ({ ...app, id: app._id })));
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800">
            {error}
            <button
              onClick={refetch}
              className="ml-2 underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        )}

        {loading && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse"
                >
                  <div className="h-3 bg-gray-200 rounded w-16 mb-2" />
                  <div className="h-6 bg-gray-200 rounded w-10" />
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-40 mb-4" />
              <div className="h-10 bg-gray-200 rounded mb-3" />
              <div className="h-10 bg-gray-200 rounded mb-3" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
          </div>
        )}

        {!loading && (
          <>
            <StatsBar applications={applications} />
            <ApplicationForm
              key={editingId || "new"}
              onAdd={async (newApp) => {
                try {
                  const created = await api.create(newApp);
                  setApplications((prev) => [
                    { ...created, id: created._id },
                    ...prev,
                  ]);
                } catch (err) {
                  setError(err.message);
                }
              }}
              editingId={editingId}
              applications={applications}
              onSaveEdit={async (id, updatedFields) => {
                try {
                  const updated = await api.update(id, updatedFields);
                  setApplications((prev) =>
                    prev.map((app) =>
                      app.id === id ? { ...updated, id: updated._id } : app,
                    ),
                  );
                  setEditingId(null);
                } catch (err) {
                  setError(err.message);
                }
              }}
              onCancelEdit={() => setEditingId(null)}
            />
            <ApplicationList
              applications={applications}
              onDelete={async (id) => {
                try {
                  await api.remove(id);
                  setApplications((prev) =>
                    prev.filter((app) => app.id !== id),
                  );
                } catch (err) {
                  setError(err.message);
                }
              }}
              onStartEdit={(id) => setEditingId(id)}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
