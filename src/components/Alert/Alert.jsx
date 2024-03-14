/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Alert.css';

const Alert = ({ cor, mostrar, children }) => {
  const [isVisible, setIsVisible] = useState(mostrar);

  useEffect(() => {
    setIsVisible(mostrar); 
  }, [mostrar]);

  return (
    isVisible && (
      <div className={`alert ${cor}`}>
        {children}
      </div>
    )
  );
};

export default Alert;
