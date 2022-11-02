import React from 'react';

export default function Service(props) {
  var { icon, name, text } = props;

  return (
    <div className="Service">
      <i className={icon}></i>
      <div>
        <h3>{name}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}