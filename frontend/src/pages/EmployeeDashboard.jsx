import React from "react";
import "../styles/employeeDashboard.css";

const EmployeeDashboard = () => {
  const feedbackHistory = [
    {
      id: 1,
      date: "2025-06-18",
      strengths: "Communication, Collaboration",
      improvement: "Time management",
      sentiment: "Positive",
    },
    {
      id: 2,
      date: "2025-06-10",
      strengths: "Leadership",
      improvement: "Delegation",
      sentiment: "Neutral",
    },
  ];

  return (
    <div className="employee-dashboard">
      <div className="notification-banner">
        You have 2 unacknowledged feedback entries.
      </div>

      <div className="section">
        <h2>Weekly Summary</h2>
        <p>You've received 1 new feedback this week. Sentiment remains positive.</p>
      </div>

      <div className="section">
        <h2>Sentiment Chart</h2>
        <div className="chart-bar">
          <div className="bar positive" style={{ width: "70%" }}>
            Positive (70%)
          </div>
          <div className="bar neutral" style={{ width: "20%" }}>
            Neutral (20%)
          </div>
          <div className="bar negative" style={{ width: "10%" }}>
            Negative (10%)
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Feedback History</h2>
        {feedbackHistory.map((entry) => (
          <div key={entry.id} className="feedback-card">
            <div>
              <strong>Date:</strong> {entry.date}
            </div>
            <div>
              <strong>Strengths:</strong> {entry.strengths}
            </div>
            <div>
              <strong>Areas to Improve:</strong> {entry.improvement}
            </div>
            <div>
              <strong>Sentiment:</strong> {entry.sentiment}
            </div>
            <button className="ack-btn">Acknowledge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
