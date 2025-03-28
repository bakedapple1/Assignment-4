import { useRef, useState } from "react";


function NewtonsMethod() {
    const [guess, setGuess] = useState(0);
    const [aprox, setAprox] = useState("");
    const permutations = useRef("");

    function getFOfX(x) {
        return 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
    }

    function getFPrimeOfX(x) {
        return 24 * x ** 3 - 39 * x ** 2 - 36 * x + 7;
    }

    function findRoots(event) {
        event.preventDefault();

        let varPrevAprox = guess;
        let varAprox = varPrevAprox - getFOfX(varPrevAprox) / getFPrimeOfX(varPrevAprox);

        permutations.current = 1;

        while (Math.abs(varAprox - varPrevAprox) >= 0.0001) {
            permutations.current++;
            varPrevAprox = varAprox;
            varAprox = varPrevAprox - getFOfX(varPrevAprox) / getFPrimeOfX(varPrevAprox);
        }

        setAprox(varAprox);
    }

    return (
        <div className="calculators">
            <h1 className="title">Newton's Method</h1>
            <form className="forms" id="newt" onSubmit={(event) => { findRoots(event) }}>
                <label htmlFor="guess">Root Guess:</label>
                <input type="number" step="any" name="guess" id="guess" onChange={(event) => { setGuess(Number(event.target.value)) }} required />
                <label htmlFor="resPerms">Permutations:</label>
                <input type="text" name="permuts" id="resPerms" value={permutations.current} readOnly /> 
                <label htmlFor="resN">Root Approximation:</label>
                <input type="text" name="result" id="resN" value={aprox} readOnly />
                <input type="submit" value="Calculate" className="submit-button" id="newt-submit" />
            </form>
        </div>
    );
}

export default NewtonsMethod;