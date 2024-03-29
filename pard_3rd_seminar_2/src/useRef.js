import { useRef, useEffect } from "react";

function useRef() {
    const inputValue = useRef();

    useEffect(() => {
        console.log(inputValue);
        inputValue.current.focus();
    }, []);

    return (
        <div>
            <input type = "text" ref = {inputValue} placeholder="username" />
            <button>입력</button>
        </div>
    );
}

export default useRef;