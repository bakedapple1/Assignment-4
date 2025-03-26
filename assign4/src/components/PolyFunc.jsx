import { use, useState } from "react";


function PolyFunc() {
    const [coeff, setCoeff] = useState("");
    const [expo, setExpo] = useState("");
    const [x, set] = useState(0);

    function generateFunc(event) {

    }


    return (
        <div className="calculators">
            <h1 className="title">Polynomial Function</h1>
            <form className="forms" id="pofunc" onSubmit={(event) => { generateFunc(event) }}>
                <label htmlFor="coeff">Coefficients:</label>
                <input type="text" name="coeff" id="coeff" onChange={(event) => { setCoeff(event.target.value) }} />
                <label htmlFor="expo">Exponents:</label>
                <input type="text" name="expo" id="expo" onChange={(event) => { setExpo(event.target.value) }} />
                <label htmlFor="xVal">x Value:</label>
                <input type="number" step="any" name="xVal" id="xVal" onChange={(event) => { setX(event.target.value) }}/>
                <label htmlFor="resFunc">Polynomial Function:</label>
                <input type="text" name="permuts" id="resFunc" disabled />
                <label htmlFor="resEval">Polynomial Evaluation:</label>
                <input type="text" name="result" id="resEval" disabled />
                <input type="submit" value="Calculate" className="submit-button" id="pofunc-submit" />
            </form>
        </div >
    );

}

export default PolyFunc;