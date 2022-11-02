import React from 'react';

export default function Testimonial(props) {
  var { img, text, name } = props;

  return (    
      <div className="Testimonial">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>
            {text}
          </p>
          <div> - {name} </div>
        </div>
      </div>    
  )
}