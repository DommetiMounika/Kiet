import React from 'react';

const Branches = () => {
  return (
    <div className="Branches" style={{ marginBottom: '0' }}>
      <h2 className="h23">Branches</h2>
      <p className="p34">
        Explore our branches and find the one that suits your interests. Our diverse<br />
        branches offer specialized courses and opportunities for growth in various fields.
      </p>
      <div className="BranchCard">
        <h3>CME</h3>
        <p className="p34">Computer Engineering Related To CSE with specializations</p>
        <p  className="p34">CSC(cyber security)</p>
        
        <p  className="p34">AID(Artificial intilligence and data science)</p>
        
        <p  className="p34">CSM(meachine learning)</p>
        <p className="p34">
          Graduates: 1000 <br />
          Years: 3
        </p>
      </div>
    </div>
  );
};

export default Branches;
