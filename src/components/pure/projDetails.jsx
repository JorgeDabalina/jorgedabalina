import React from 'react';





const ProjDetails = ({details}) => {
  return (
    
    <div className='proj-details col'>
      
      <p className='pt-1'>
          [ {details.media} | {details.year} ]
        </p>
    </div>
  );
};


ProjDetails.propTypes = {

};


export default ProjDetails;
