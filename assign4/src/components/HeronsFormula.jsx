import { useState } from 'react';

function HeronsFormula() {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [sideC, setSideC] = useState("");
    const [area, setArea] = useState("");

    function calculateArea(event) {
        event.preventDefault();

        setArea(Number((0.25 * Math.sqrt(4 * sideA ** 2 * sideB ** 2 - (sideA ** 2 + sideB ** 2 - sideC ** 2) ** 2)).toFixed(5)));
    }

    return (
        <div className="calculators">
            <h1 className="title">Heron's Formula</h1>
            <form className="forms" id="herons" onSubmit={(event) => { calculateArea(event) }}>
                <label htmlFor="a">Side a:</label>
                <input type="number" step="any" name="sideA" id="a" onChange={(event) => { Number(setSideA(event.target.value)) }} required />
                <label htmlFor="b">Side b:</label>
                <input type="number" step="any" name="sideB" id="b" onChange={(event) => { Number(setSideB(event.target.value)) }} required />
                <label htmlFor="c">Side c:</label>
                <input type="number" step="any" name="sideC" id="c" onChange={(event) => { Number(setSideC(event.target.value)) }} required />
                <label htmlFor="resH">Area:</label>
                <input type="text" name="result" id="resH" value={area} readOnly />
                <input type="submit" value="Calculate" className="submit-button" id="herons-submit" />
            </form>
        </div>
    );
}

export default HeronsFormula;
