import React from 'react';

const DefaultImage = ({ src, defaultSrc, alt, ...rest }) => {
    
  const handleError = (event) => {
    event.target.src = defaultSrc;
  };

  return <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrh4vHdJEcAoxSjyb0meBM_wrCl1oR1ZCfw&usqp=CAU"} onError={handleError} alt={alt} {...rest} />;
};

export default DefaultImage;