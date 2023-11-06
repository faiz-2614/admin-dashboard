import React, { useState, useEffect } from 'react';

const RevenueDashboard = ({ currentPeriod, previousPeriod }) => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch revenue data and calculate total revenue as shown in the previous response.
  }, [currentPeriod, previousPeriod]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Total Revenue</h2>
      <div className="revenue-info">
        <p className="revenue-text">Current Period: ${totalRevenue.current}</p>
        <p className="revenue-text">Previous Period: ${totalRevenue.previous}</p>
      </div>
      <p className="growth-text">
        {totalRevenue.current > totalRevenue.previous
          ? 'Growth compared to the previous period'
          : 'Decline compared to the previous period'}
      </p>
    </div>
  );
};

export default RevenueDashboard;
