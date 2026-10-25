import { useState } from "react";
const statusBadge = {
  Applied: "bg-blue-100 text-blue-800",
  Interview: "bg-yellow-100 text-yellow-800",
  Offer: "bg-red-100 text-red-900",
  Rejected: "bg-gray-200 text-gray-700",
};
function ApplicationList({ applications }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredApplications = applications.filter((app) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      app.company.toLowerCase().includes(term) ||
      app.title.toLowerCase().includes(term)
    );
  });
  const noApplications = applications.length === 0;
  const noMatches = filteredApplications.length === 0 && !noApplications;
  return (
    <section aria-labelledby="list-heading">
      <h2
        id="list-heading"
        className="text-lg font-semibold text-gray-900 mb-3"
      >
        Applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search
          </label>
          <input
            id="search"
            type="search"
            placeholder="Company or job title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          />
        </div>
        <div>
          <label
            htmlFor="filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Filter by status
          </label>
          <select
            id="filter"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
          >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      {noApplications ? (
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
          <p className="text-gray-600 text-sm">
            No applications yet. Add one above to get started.
          </p>
        </div>
      ) : noMatches ? (
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
          <p className="text-gray-600 text-sm">
            No applications match your search.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredApplications.map((app) => (
            <li
              key={app.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{app.company}</h3>
                  <p className="text-sm text-gray-600">{app.title}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${statusBadge[app.status] || "bg-gray-100 text-gray-700"}`}
                >
                  {app.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Applied on {app.date}
              </p>
              {app.notes && (
                <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                  {app.notes}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ApplicationList;
