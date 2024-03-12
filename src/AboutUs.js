import React from 'react';
import Header from "./Header";
import './styles/AboutUs.css';
import wave from "./images/wave.svg";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    { name: 'Praveena', githubId: '' },
    { name: 'Vishnu Ram M', githubId: 'jane-smith' },
    { name: 'Harish M', githubId: 'bob-johnson' },
    { name: 'Dev Prashaant M R', githubId: 'alice-williams' },
    { name: 'Barath Viswa Raj S', githubId: 'charlie-brown' },
  ];

  return (
    <div className="about-container">
      <Header />
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our Social Media Dashboard!</p>
      </div>

      <div className="about-content">
        <p>
          At Social Media Dashboard, we are dedicated to providing you with cutting-edge tools for
          managing and analyzing your social media presence. Our platform is designed to simplify
          the complexities of social media data, offering you powerful insights to make informed decisions.
        </p>
        <p>
          Whether you're a business owner, social media manager, or an individual looking to
          optimize your online presence, our dashboard is tailored to meet your needs.
          Explore our features and unlock the full potential of social media analytics with us!
        </p>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index}>
                {member.name} - GitHub: <a href={`https://github.com/${member.githubId}`}>{member.githubId}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about-footer">
        <p>Contact us at: <a href="mailto:info@example.com">info@sociolytes.com</a></p>
      </div>
      <img src={wave} alt="" className="wavee" />
    </div>
  );
};

export default AboutUs;
