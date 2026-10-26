import { useState, useRef, useEffect } from "react";
function ApplicationForm({
  onAdd,
  editingId,
  applications,
  onSaveEdit,
  onCancelEdit,
}) {
  const editingApp = editingId
    ? applications.find((app) => app.id === editingId)
    : null;
  const sectionRef = useRef(null);

  const [form, setForm] = useState(
    editingApp
      ? {
          company: editingApp.company,
          title: editingApp.title,
          date: editingApp.date,
          status: editingApp.status,
          url: editingApp.url || "",
          notes: editingApp.notes || "",
        }
      : {
          company: "",
          title: "",
          date: "",
          status: "Applied",
          url: "",
          notes: "",
        },
  );
  useEffect(() => {
    if (editingId && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [editingId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company.trim() || !form.title.trim() || !form.date) return;

    if (editingId) {
      onSaveEdit(editingId, form);
    } else {
      onAdd(form);
    }

    setForm({
      company: "",
      title: "",
      date: "",
      status: "Applied",
      url: "",
      notes: "",
    });
  };

  return (
    <section ref={sectionRef} aria-labelledby="form-heading">
      <h2
        id="form-heading"
        className="text-lg font-semibold text-gray-900 mb-3"
      >
        {editingId ? "Edit Application" : "Add Application"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4"
      >
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Application Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Posting URL (optional)
          </label>
          <input
            id="url"
            name="url"
            type="url"
            value={form.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          />
        </div>
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            value={form.notes}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-red-900 hover:bg-red-800 text-white font-medium px-4 py-2 rounded-md transition-colors"
          >
            {editingId ? "Save Changes" : "Add Application"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-md transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ApplicationForm;
