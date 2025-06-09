import { useState } from 'react'
import './App.css';

const App = () => {
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0);
    const [isResultVisible, setIsResultVisible] = useState(false);

    const calculatorButtons = [
        ['(', ')', 'C', 'AC'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];

    const clearAll = () => {
        setOperation('');
        setResult(0);
        setIsResultVisible(false);
    };

    const deleteLast = () => {

        if ( isResultVisible ) {
            setOperation('');
            setResult(0);
            setIsResultVisible(false);
            return;
        } 

        setOperation(prev => prev.slice(0, -1));
    };

    const calculate = () => {
        setResult( eval(operation) )
        setIsResultVisible(true);
    }

    const pressButton = (button) => {
        if (button === '=') {
            calculate();
        } 

        else if (button === 'C') {
            clearAll();
        } 
        else if (button === 'AC') {
            deleteLast();
        }

        else {
            setOperation(prev => prev + button);
        }
    }

    return (
        <div className="calculator">
            <div className="display">
                <p>{operation.trim() === '' ? '\u00A0' : operation}</p>
                <p>{result}</p>
            </div>

            <div className="buttons">
                {
                    calculatorButtons.map((row, rowIndex) => (
                        <div key={rowIndex} className="button-row">
                            {row.map((button, buttonIndex) => (
                                <button
                                    key={buttonIndex}
                                    onClick={() => pressButton(button)}
                                    className={`btn${button === '=' ? ' btn-equals' : ''}${button === 'C' ? ' btn-clear' : ''}${button === 'AC' ? ' btn-delete' : ''}`}
                                >
                                    {button}
                                </button>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default App
