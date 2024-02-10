import React from "react";

export default function Dashboard() {
  return (
    <div className="cms-dashboard">
      <div className="dashboard-sidebar"></div>
      <div className="dashboard-wrapper">
        <div className="dash-heading">
          <h1>Manage Properties</h1>
        </div>
        <div className="dash-content">
          <div className="search">
            <input type="text" placeholder="Search Records" />
          </div>
          <div className="records">
            <table>
              <thead>
                <tr>
                  <th>Property ID</th>
                  <th>Property Name</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
