/* eslint-disable react/prop-types */
import './Alert.css';


const Alert = ({ cor, children }) => {

 

  return (
    
      <div className={`alert ${cor}`}>
        {children}
      </div>

  );
};

export default Alert;
