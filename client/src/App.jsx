function App() {
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
        <section aria-labelledby="stats-heading">
          <h2
            id="stats-heading"
            className="text-lg font-semibold text-gray-900 mb-3"
          >
            Overview
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Applied</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Interview</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Offer</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Rejected</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="form-heading">
          <h2
            id="form-heading"
            className="text-lg font-semibold text-gray-900 mb-3"
          >
            Add Application
          </h2>
          <form className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4">
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
              />
            </div>
            <button
              type="submit"
              className="bg-red-900 hover:bg-red-800 text-white font-medium px-4 py-2 rounded-md transition-colors"
            >
              Add Application
            </button>
          </form>
        </section>
        <section aria-labelledby="list-heading">
          <h2 id="list-heading">Applications</h2>
          <div>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="search"
              placeholder="Company or job title"
            />
          </div>

          <div>
            <label htmlFor="filter">Filter by status</label>
            <select id="filter">
              <option value="All">All</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <ul>
            <li>No applications yet. Add one above.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
