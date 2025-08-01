// src/pages/ViewReports.jsx
import React, { useEffect, useState } from 'react';

const ViewReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/report');
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error('Failed to fetch reports:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <p>Loading reports...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Submitted Reports</h2>
      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <ul>
          {reports.map((report) => (
            <li key={report._id}>
              <strong>{report.name}</strong> (Age: {report.age})<br />
              📌 <em>{report.issue}</em> on <b>{report.platform}</b><br />
              🕒 {new Date(report.createdAt).toLocaleString()}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewReports;
