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
          <h2 id="form-heading">Add Application</h2>
          <form>
            <div>
              <label htmlFor="company">Company Name</label>
              <input id="company" name="company" type="text" required />
            </div>
            <div>
              <label htmlFor="title">Job Title</label>
              <input id="title" name="title" type="text" required />
            </div>

            <div>
              <label htmlFor="date">Application Date</label>
              <input id="date" name="date" type="date" required />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select id="status" name="status" required>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label htmlFor="url">Job Posting URL (optional)</label>
              <input id="url" name="url" type="url" />
            </div>

            <div>
              <label htmlFor="notes">Notes (optional)</label>
              <textarea id="notes" name="notes" rows="3" />
            </div>

            <button type="submit">Add Application</button>
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
