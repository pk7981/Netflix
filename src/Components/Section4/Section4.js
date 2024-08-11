import React from 'react';
import "./Section4.css";
import img1 from "../../assets/section4/image.jpg";
import img2 from "../../assets/section4/boxshot.png";
import img3 from "../../assets/section4/progress.gif";
import img4 from "../../assets/section4/progress.gif";

const Section4 = () => {
  return (
    <div>
      <div className="section4">
        <div className="combine">
          <img src={img1} className="img1" alt="Background with Stranger Things theme" />
          <div className="box">
            <img src={img2} className="img2" alt="Box shot of Stranger Things" />
            <div className="box-content">
              <h1>Stranger Things</h1>
              <p>Downloading...</p>
            </div>
            <img src={img3} className="img3" alt="Loading animation" />
            <img src={img4} className="img4" alt="Loading animation" />
          </div>
        </div>
        <div className="section4-content">
          <h1>
            Download your shows
            <span />
            to watch offline.
          </h1>
          <p>
            Save your favorites easily and always have
            <span />
            something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
