import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to Collaboration Tool</h1>
      <div>
        <button
          className="btn btn-primary btn-lg m-2"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="btn btn-success btn-lg m-2"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default HomePage;
