import React from 'react';
import Testimonial from '../Testimonial';
import getTestimonialsData from '../data/testimonials';

export default function TestimonialsPage() {
  var testimonialsData = getTestimonialsData();

  return (    
        <div className="TestimonialsPage">
          <div>
            <h2>What our clients say</h2>
          </div>
          <div>
            {
              testimonialsData.map((testimonial, index) => <Testimonial key={index} {...testimonial} />)
            }
          </div>
        </div>      
  );
}