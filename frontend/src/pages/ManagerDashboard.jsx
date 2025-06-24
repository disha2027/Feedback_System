import React from "react";
import "../styles/dashboard.css";

const ManagerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Manager Dashboard</h2>
      <p className="subtitle">Team overview and feedback tracking.</p>

      <div className="team-summary">
        <h3>Team Feedback Overview</h3>
        <table className="team-table">
          <thead>
            <tr>
              <th>Team Member</th>
              <th>Total Feedbacks</th>
              <th>Last Sentiment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>4</td>
              <td>Positive</td>
              <td><button className="view-btn">View</button></td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>2</td>
              <td>Neutral</td>
              <td><button className="view-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerDashboard;
