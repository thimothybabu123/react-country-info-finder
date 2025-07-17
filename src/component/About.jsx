import React from 'react';

function About() {
  return (
     <div className="container mt-5 d-flex justify-content-center">
      <div className="card bg-dark text-white p-4 shadow" style={{ maxWidth: '700px', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
        <h2 className="card-title text-center"> About Country Finder</h2>
        <div className="card-body">
          <p className="card-text">
            Country Finder is your go-to app for discovering country information and viewing their details in a visually stunning and user-friendly interface. Powered by the REST Countries API, it lets you explore country flags, capital cities, population, area, and more.
          </p>
          <p className="card-text">
            Designed with a modern aesthetic using React and Bootstrap, this app offers a seamless experience for curious travelers and geography enthusiasts.
          </p>
          <p className="card-text text-center mt-3"><em>
            Start exploring your favorite countries today!
            </em></p>
        </div>
      </div>
    </div>
  );
}

export default About;