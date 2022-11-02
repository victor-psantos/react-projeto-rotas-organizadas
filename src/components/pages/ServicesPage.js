import React from 'react';
import Service from '../Service';
import getServicesData from '../data/services';

export default function ServicesPage() {
  var servicesData = getServicesData();

  return (
      
        <div className="ServicesPage">
          <div>
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div>
            {servicesData.map((service, index) => <Service key={index} {...service} />)}
            <Service />
          </div>
        </div>    
  );  
}

