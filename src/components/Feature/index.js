import React from 'react';

export default function Feature(props) {
  var { icon, title, text } = props;

  return (
    <div className="Feature">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>
        {text}
      </p>
    </div>
  );
}