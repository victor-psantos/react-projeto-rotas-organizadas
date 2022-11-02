import React from 'react';

import getFeaturesData from '../data/features';
import Feature from '../Feature';

function FeaturesPage() { 
    var features = getFeaturesData();
  return (    
      <div className="Feature">
        <div>
          <h2>Features</h2>
        </div>
        <div>
            {features.map((feature, index) => <Feature {...feature} key={index} />)}        
        </div>
      </div>    
  );
}


export default FeaturesPage;