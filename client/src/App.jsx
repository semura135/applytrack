function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <h1>ApplyTrack</h1>
        <p>Track your job applications in one place.</p>
      </header>

      <main>
        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading">Overview</h2>
          <ul>
            <li>Total: 0</li>
            <li>Applied: 0</li>
            <li>Interview: 0</li>
            <li>Offer: 0</li>
            <li>Rejected: 0</li>
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
