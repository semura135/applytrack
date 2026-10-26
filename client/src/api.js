const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = {
  getAll: async () => {
    const res = await fetch(`${API_URL}/api/applications`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    return res.json();
  },
  create: async (application) => {
    const res = await fetch(`${API_URL}/api/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Request failed" }));
      throw new Error(err.error || `Failed: ${res.status}`);
    }
    return res.json();
  },
  update: async (id, updates) => {
    const res = await fetch(`${API_URL}/api/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Request failed" }));
      throw new Error(err.error || `Failed: ${res.status}`);
    }
    return res.json();
  },
  remove: async (id) => {
    const res = await fetch(`${API_URL}/api/applications/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Request failed" }));
      throw new Error(err.error || `Failed: ${res.status}`);
    }
    return res.json();
  },
};
