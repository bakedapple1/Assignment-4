import { useState } from "react";

function PolyFunc() {
    const [coeff, setCoeff] = useState("");
    const [expo, setExpo] = useState("");
    const [x, setX] = useState("");
    const [resFunc, setResFunc] = useState("");
    const [resEval, setResEval] = useState("");

    function generateFunc(event) {
        event.preventDefault();
        let varResFunc = "f(x)=";
        let varResEval = 0;

        for (let i = 0; i < coeff.length; i++) {

            if (coeff[i] != 0) {
                if (coeff[i] > 0) {
                    if (varResFunc.length != 5) {
                        varResFunc += "+";
                    }
                    if (coeff[i] != 1) {
                        varResFunc += coeff[i];
                    }
                } else {
                    if (coeff[i] != -1) {
                        varResFunc += coeff[i];
                    }
                }
    
                if (expo[i] != 0) {
                    varResFunc += "x";
                    if (expo[i] != 1) {
                        varResFunc += `^${expo[i]}`;
                    }
                }
            }
    
            varResEval += coeff[i] * x ** expo[i];
        }

        setResFunc(varResFunc);
        setResEval(varResEval);
    }

    return (
        <div className="calculators">
            <h1 className="title">Polynomial Function</h1>
            <form className="forms" id="pofunc" onSubmit={(event) => { generateFunc(event) }}>
                <label htmlFor="coeff">Coefficients:</label>
                <input type="text" name="coeff" id="coeff" onChange={(event) => { setCoeff(event.target.value.split(" ").map(Number)) }} required />
                <label htmlFor="expo">Exponents:</label>
                <input type="text" name="expo" id="expo" onChange={(event) => { setExpo(event.target.value.split(" ").map(Number)) }} required />
                <label htmlFor="xVal">x Value:</label>
                <input type="number" step="any" name="xVal" id="xVal" onChange={(event) => { Number(setX(event.target.value)) }} required />
                <label htmlFor="resFunc">Polynomial Function:</label>
                <input type="text" name="permuts" id="resFunc" value={resFunc} readOnly />
                <label htmlFor="resEval">Polynomial Evaluation:</label>
                <input type="text" name="result" id="resEval" value={resEval} readOnly />
                <input type="submit" value="Calculate" className="submit-button" id="pofunc-submit" />
            </form>
        </div >
    );
}

export default PolyFunc;