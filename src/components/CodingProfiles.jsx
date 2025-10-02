import React from 'react'

const CodingProfiles = () => {
  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Anurag_Kumar_24",
      profileUrl: "https://leetcode.com/u/Anurag_Kumar_24/",
      logo: "🟡",
      color: "#FFA116",
      problemsSolved: 105,
      status: "Active"
    },
    {
      platform: "HackerRank",
      username: "msdanurag65",
      profileUrl: "https://www.hackerrank.com/profile/msdanurag65",
      logo: "🟢",
      color: "#00EA64",
      problemsSolved: 85,
      status: "5 Star Problem Solving"
    },
    {
      platform: "CodeForces",
      username: "LotusMind",
      profileUrl: "https://codeforces.com/profile/LotusMind",
      logo: "🔴",
      color: "#1F8ACB",
      problemsSolved: 45,
      status: "Newbie"
    },
    // {
    //   platform: "GeeksforGeeks",
    //   username: "your-username",
    //   profileUrl: "https://geeksforgeeks.org/user/your-username",
    //   logo: "🟢",
    //   color: "#2F8D32",
    //   problemsSolved: 65,
    //   status: "Institute Rank 150"
    // }
  ]

  return (
    <section id="coding-profiles" className="coding-profiles">
      <div className="container">
        <h2 className="section-title">Coding Platforms</h2>
        <p className="section-subtitle">
          My problem-solving journey across different coding platforms
        </p>

        <div className="profiles-grid">
          {codingProfiles.map((profile, index) => (
            <div key={index} className="profile-card-simple">
              <div className="profile-header-simple">
                <span className="profile-logo-simple">{profile.logo}</span>
                <h3>{profile.platform}</h3>
              </div>
              
              <div className="profile-stats-simple">
                <div className="stat-simple">
                  <span className="stat-number">{profile.problemsSolved}</span>
                  <span className="stat-label">Problems Solved</span>
                </div>
                <div className="profile-status">
                  <span className="status-badge">{profile.status}</span>
                </div>
              </div>

              <div className="profile-info-simple">
                <p className="username">@{profile.username}</p>
                <a 
                  href={profile.profileUrl}
                  className="profile-link-simple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Summary */}
        <div className="coding-summary-simple">
          <div className="summary-stat">
            <span className="summary-number">200+</span>
            <span className="summary-label">Total Problems Solved</span>
          </div>
          <div className="summary-stat">
            <span className="summary-number">3</span>
            <span className="summary-label">Active Platforms</span>
          </div>
          <div className="summary-stat">
            <span className="summary-number">1+</span>
            <span className="summary-label">Years of Practice</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles