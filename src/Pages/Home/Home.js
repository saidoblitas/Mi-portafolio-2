import React from 'react';
import './Home.css';
import Avatar from '../../Assets/Avatar.png';

function Home() {
  return (
    <div className="home-container">
      <div className="text-designers">
        <h1 className="designer">Designer</h1>
        <p className="designer-description">
          Diseñador web especializado en <strong>diseño UI</strong> y sistemas de diseño.
        </p>
      </div>
      <img src={Avatar} alt="Avatar" className="avatar-image" />
      <div className="text-coder">
        <h1 className="coder">&lt;Coder&gt;</h1>
        <p className="coder-description">
          <strong>Desarrollador frontend</strong>que escribe código limpio, elegante y eficiente.
        </p>
      </div>
    </div>
  );
}

export default Home;
