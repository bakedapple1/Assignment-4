import { useRef, useState } from "react";


function NewtonsMethod() {
    const [guess, setGuess] = useState(0);
    const permutations = useRef(0);
    const aprox = useRef("");

    function getFOfX(x) {
        return 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
    }

    function getFPrimeOfX(x) {
        return 24 * x ** 3 - 39 * x ** 2 - 36 * x + 7;
    }

    function findRoots(event) {
        event.preventDefault();

        let prevAprox = guess;

        permutations.current = 1;
        aprox.current = prevAprox - getFOfX(prevAprox) / getFPrimeOfX(prevAprox);

        console.log("a", permutations.current);
        while (Math.abs(aprox.current - prevAprox) >= 0.0001) {
            permutations.current++;
            prevAprox = aprox.current;
            aprox.current = prevAprox - getFOfX(prevAprox) / getFPrimeOfX(prevAprox);
            console.log("b", permutations.current);
        }


        console.log("c", permutations.current);
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
                <input type="text" name="result" id="resN" value={guess} readOnly />
                <input type="submit" value="Calculate" className="submit-button" id="newt-submit" />
            </form>
        </div>
    );
}

export default NewtonsMethod;