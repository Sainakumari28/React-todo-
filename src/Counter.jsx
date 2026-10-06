import { useEffect, useState } from "react";

// function init() {
//     console.log("init was executed");
//     return Math.random();
// }

export default function Counter() {
    let [countx, setCountx] = useState(0); //initialise
    let [county, setCounty] = useState(0)

    let incCountx = () => {
     setCountx((currCount) => currCount +1);
    };

    let incCounty = () => {
     setCounty((currCount) => currCount +1);
    };

    useEffect(function printSomething() {
        console.log("this is a side-effect");
    }, []);

    return (
        <div>
            <h3>Countx = {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>County = {county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}