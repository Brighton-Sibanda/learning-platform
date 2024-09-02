import React from 'react';
import { Link } from 'react-router-dom';

function StudentPortal() {
  return (
    <div className="container mt-3">
      <h1 className="mb-3">Student Dashboard</h1>
      <div className="d-flex justify-content-between">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Upcoming Assignments</h5>
            <p className="card-text">Math Homework - Due Sep 10</p>
            <p className="card-text">Science Project - Due Sep 15</p>
            <Link to="/assignments" className="btn btn-primary">View All</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Recent Grades</h5>
            <p className="card-text">Math: 95%</p>
            <p className="card-text">Science: 88%</p>
            <Link to="/grades" className="btn btn-success">View All Grades</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Profile</h5>
            <p className="card-text">Student ID: 123456</p>
            <Link to="/profile" className="btn btn-info">Edit Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPortal;
