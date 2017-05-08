import React from 'react';

import Behance from './behance/behance';

export default () => {
  return (
    <div className="section">
      <div className="container-fluid">
        <h1>Design Process</h1>
        <p>
          With a background doing illustrations, I fell in love with using the Apple Pencil + iPad Pro flow for all-things
          wire-framing, illustrations via vector work. I then take them to high fidelity using Adobe Illustrator, Photoshop and After Effects for polish.
        </p>
      </div>
      <Behance />
    </div>
  );
};
