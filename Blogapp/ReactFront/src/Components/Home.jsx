import React from "react";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to BlogSphere</h1>
        <p>
          Discover amazing stories, ideas, and creative thoughts from writers
          around the world.
        </p>

        <button className="hero-btn">Start Reading</button>
      </section>

      {/* FEATURED SECTION */}
      <section className="featured">
        <h2>Featured Blogs</h2>

        <div className="blog-container">

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              alt="blog"
            />
            <h3>Travel Adventures</h3>
            <p>
              Explore beautiful destinations and unforgettable journeys.
            </p>
          </div>

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="blog"
            />
            <h3>Tech & Innovation</h3>
            <p>
              Latest updates from the world of technology and AI.
            </p>
          </div>

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="blog"
            />
            <h3>Creative Lifestyle</h3>
            <p>
              Inspiration, productivity, and modern living ideas.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;