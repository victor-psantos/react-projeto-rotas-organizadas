import React from "react";

export default function PortfolioItem(props) {
  var { largeImage, smallImage, hoverText } = props;

  return (
        <div className="PortfolioItem">
          <a
            href={largeImage}
            title={hoverText}
            data-lightbox-gallery="gallery1"
          >
            <div className="hover-text">
              <h4>{hoverText}</h4>
            </div>
            <img
              src={smallImage}
              className="img-responsive"
              alt="Project Title"
            />
          </a>
        </div>
  );
}
