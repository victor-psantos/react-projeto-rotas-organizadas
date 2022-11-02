import React from 'react';
import TeamMember from '../TeamMember';
import getTeamData from '../data/team';

export default function TeamPage() {
  var teamData = getTeamData();

  return (    
      <div className="TeamPage">
        <div>
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div>
          {
            teamData.map((teamMember, index) => <TeamMember key={index} {...teamMember} />)
          }
        </div>
      </div>    
  );
}