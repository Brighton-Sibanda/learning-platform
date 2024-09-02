import React from 'react';
import { Link } from 'react-router-dom';

function TeacherPortal() {
  return (
    <div className="container mt-3">
      <h1 className="mb-3">Teacher Dashboard</h1>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Class Image"/>
            <div className="card-body">
              <h5 className="card-title">Class Management</h5>
              <p className="card-text">Manage your classes and schedules.</p>
              <Link to="/manage-classes" className="btn btn-primary">Manage Classes</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Assignment Image"/>
            <div className="card-body">
              <h5 className="card-title">Assignments</h5>
              <p className="card-text">Create and review assignments.</p>
              <Link to="/assignments" className="btn btn-warning">Assignments</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Grades Image"/>
            <div className="card-body">
              <h5 className="card-title">Gradebook</h5>
              <p className="card-text">Enter and review student grades.</p>
              <Link to="/gradebook" className="btn btn-success">Gradebook</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Communication Image"/>
            <div className="card-body">
              <h5 className="card-title">Communication</h5>
              <p className="card-text">Messages to students and parents.</p>
              <Link to="/communications" className="btn btn-info">Send Message</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherPortal;
