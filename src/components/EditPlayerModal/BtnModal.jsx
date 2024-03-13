/* eslint-disable react/prop-types */

import './BtnModal.css';

const BtnModal = ({ valor, setValor }) => {
    const valorInt = parseInt(valor) || 0;

    const aumentar = () => {
        setValor(valorInt + 1);
    };

    const diminuir = () => {
        if (valorInt > 0) {
            setValor(valorInt - 1);
        }
    };

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue)) {
            setValor(newValue);
        }
    };

    return (
        <div className="btnContainer">
            <button onClick={diminuir}>-</button>
            <input
                type="text"
                value={valorInt}
                onChange={handleChange}
                min={0}
            />
            <button onClick={aumentar}>+</button>
        </div>
    );
};

export default BtnModal;
