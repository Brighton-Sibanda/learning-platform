import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to the E-Learning Platform</h1>
      <Link to="/student" className="btn btn-primary m-2">Student Portal</Link>
      <Link to="/teacher" className="btn btn-secondary m-2">Teacher Portal</Link>
    </div>
  );
}

export default Home;
