import React, { useState } from 'react';

function AlertInput() {
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleButtonClick = () => {
        alert(inputValue);
    }

    return (
        <div>
            <input type = "text" value = {inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Display Alert</button>
        </div>
    );
}

export default AlertInput;