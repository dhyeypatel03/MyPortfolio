import React from "react";

function Projects() {
  return (
    <section className="py-5 bg-light" id="projects">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card project-card">
              <div className="card-body">
                <h5 className="card-title">Speech to Text App</h5>
                <p className="card-text">Live transcription system using Whisper + LSTM + Flask.</p>
              </div>
            </div>
          </div>
          {/* More projects can go here */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
