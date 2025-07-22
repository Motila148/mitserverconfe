import React from 'react';
import './ImportantDates.css';

const conferenceDates = [
  { title: 'Last date of Abstract Submission', date: 'August 5, 2025' },
  { title: 'Last date of Paper Submission', date: 'September 14, 2025' },
  { title: 'Intimation of Paper acceptance', date: 'October 31, 2025' },
  { title: 'Last date of Registration', date: 'November 15, 2025' },
];

// Helper function to determine the deadline status
// Given the current date (July 21, 2025), this will correctly mark the first item as 'urgent'.
const getDeadlineStatus = (dateString) => {
  const today = new Date();
  const deadline = new Date(dateString);
  
  today.setHours(0, 0, 0, 0);
  
  if (deadline < today) return 'past';
  
  const daysDifference = (deadline - today) / (1000 * 60 * 60 * 24);
  if (daysDifference <= 17) return 'urgent';

  return 'active';
};

const ImportantDates = () => {
  return (
    <section className="important-dates-section">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        <div className="dates-table-wrapper">
          <table className="dates-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {conferenceDates.map((item, index) => {
                const statusClass = getDeadlineStatus(item.date);
                return (
                  <tr key={index} className={statusClass}>
                    <td data-label="Event">{item.title}</td>
                    <td data-label="Date">{item.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;