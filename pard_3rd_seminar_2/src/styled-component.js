import styled from "styled-components";

function SC1() {
    return (
        <div>
            <Button>Click me!</Button>
        </div>
    );
}

const Button = styled.button`
    background-color: #0077cc;
    color: #ffffff;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #0077cc;
    border-radius: 3px;
    `;


export default SC1;