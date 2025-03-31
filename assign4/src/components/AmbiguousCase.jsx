import { useState } from 'react';

function AmbiguousCase() {
    const [angA, setAngA] = useState(0);
    const [sideA, setSideA] = useState(0);
    const [sideB, setSideB] = useState(0);
    const [result, setResult] = useState("");

    function findTriangle(event) {
        event.preventDefault();
        const height = Number((sideB * Math.sin(angA * Math.PI / 180)).toFixed(10))

        if (angA >= 90) {
            if (sideA <= sideB) {
                setResult("no triangle");
            } else {
                setResult("one triangle");
            }
        } else {
            if (sideA < height) {
                setResult("no triangle");
            } else if (sideA == height) {
                setResult("right triangle");
            } else if (sideA >= sideB) {
                setResult("one triangle");
            } else if (sideA > height && sideA < sideB) {
                setResult("two triangles (ambiguous case)");
            }
        }
    }

    return (
        <div className="calculators">
            <h1 className="title">Ambiguous Case</h1>
            <form className="forms" id="ambig" onSubmit={(event) => { findTriangle(event) }}>
                <label htmlFor="a">Angle A:</label>
                <input type="number" step="any" name="angA" id="angA" onChange={(event) => { setAngA(Number(event.target.value)) }} required />
                <label htmlFor="b">Side a:</label>
                <input type="number" step="any" name="sideA" id="sideA" onChange={(event) => { setSideA(Number(event.target.value)) }} required />
                <label htmlFor="c">Side b:</label>
                <input type="number" step="any" name="sideB" id="sideB" onChange={(event) => { setSideB(Number(event.target.value)) }} required />
                <label htmlFor="resH">Triangle Type:</label>
                <input type="text" name="result" id="resA" value={result} readOnly />
                <input type="submit" value="Calculate" className="submit-button" id="ambig-submit" />
            </form>
        </div>
    );
}

export default AmbiguousCase;
