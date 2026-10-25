function StatsBar({ applications }) {
  const total = applications.length;
  const applied = applications.filter((a) => a.status === "Applied").length;
  const interview = applications.filter((a) => a.status === "Interview").length;
  const offer = applications.filter((a) => a.status === "Offer").length;
  const rejected = applications.filter((a) => a.status === "Rejected").length;
  return (
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
          <p className="text-2xl font-bold text-gray-900 mt-1">{total}</p>
        </li>
        <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-600">Applied</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{applied}</p>
        </li>
        <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-600">Interview</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{interview}</p>
        </li>
        <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-600">Offer</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{offer}</p>
        </li>
        <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-600">Rejected</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{rejected}</p>
        </li>
      </ul>
    </section>
  );
}

export default StatsBar;
