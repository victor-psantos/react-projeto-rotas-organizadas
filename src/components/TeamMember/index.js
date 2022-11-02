import React from 'react';

export default function TeamMember(props) {
  var { img, name, job } = props;

  return (    
      <div className="TeamMember">
        <img src={img} alt="..." />
        <div>
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
      </div>    
  );
}