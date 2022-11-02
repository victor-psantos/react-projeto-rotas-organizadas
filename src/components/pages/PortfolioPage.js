import React from 'react';
import PortfolioItem from '../PortfolioItem';
import getPortfolioData from '../data/portfolio';

function PortfolioPage() { 
  var portfolioItemsData = getPortfolioData();
  return (    
      <div className="Portfolio">
        <div>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div>         
            {portfolioItemsData.map((item, index) => <PortfolioItem key={index} {...item} />)}
        </div>
      </div>    
  );
}

export default PortfolioPage;