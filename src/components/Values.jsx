import React from 'react';
import './Values.css';

const Values = () => {
  return (
    <div className="values-section">
      <div className="values-container">
        <div className="values-header">
          <h1>Our Values</h1>
          <p className="proverb">
            "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths"
          </p>
          <p className="proverb">
            - Proverbs 3: 5-6
          </p>
        </div>

        <div className="values-content">
          <div className="values-box">
            <h2>Integrity</h2>
            <p>
              Integrity is the bedrock of our business philosophy. We are steadfast in our commitment to ethical conduct, transparency, and truthfulness, ensuring our actions align with our promises.
            </p>
          </div>
          <div className="values-box">
            <h2>Ingenuity</h2>
            <p>
              Ingenuity is one of our guiding principles. We are deeply committed to mastering our craft through continuous learning, keeping pace with the forefront of scientific and technological advancements.
            </p>
          </div>
          <div className="values-box">
            <h2>Sustainability</h2>
            <p>
              We believe sustainability is multi-faceted. We're committed to eco-friendly construction, skill transfer to the next generation, and building lasting partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;