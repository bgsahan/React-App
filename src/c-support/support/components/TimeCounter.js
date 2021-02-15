import React, { useEffect, useState } from "react";

export default function TimeCounter() {

    var startDate = Date.now();
    var endDate = Date.now();
    let timeLeft = {};
    var difference = 1;

    const [differenceState, setDifferenceState] = useState("");

    function calculateTimeLeft() {

        //let year = new Date().getFullYear();
        //const difference = +new Date(`11/02/${year}`) - +new Date(); //The + before the new Date object is shorthand to tell JavaScript to cast the object as an integer,

        endDate = Date.now();
        difference = endDate - startDate;
        startDate = endDate;

        var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        var minutes = Math.floor((difference / 1000 / 60) % 60);
        var seconds = Math.floor((difference / 1000) % 60);

        var differenceString = (hours + ":" + minutes + ":" + seconds + " ");

        setDifferenceState(differenceString);

    };


    return (
        <div class="time_counter">
            {<span>{differenceState}</span>}
            <button onClick={calculateTimeLeft}>TIME</button>
        </div>
    );



}

