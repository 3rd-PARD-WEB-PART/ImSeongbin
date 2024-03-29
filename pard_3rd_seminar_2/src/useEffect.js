import react, { useState, useEffect } from 'react';

function App() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log("리액트는 재밌어");
    }, [count]);

    return (
        <div>
            <p>You clicked the button {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default App;