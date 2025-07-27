import React, { useState } from "react";
import './Main.css'
import Quiz from "./Quiz/Quiz";

function Main() {
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handleSelect = (e) => {
        const no = e.target.textContent.trim();
        setSelectedQuiz(Number(no));
    };

    return (
        <>
            {!selectedQuiz ? (
                <div className="menu ">
                    <h2>Select your Quiz test</h2>
                    (No of Questions):
                    <ul>
                        <li onClick={handleSelect}>5</li>
                        <li onClick={handleSelect}>10</li>
                        <li onClick={handleSelect}>15</li>
                        <li onClick={handleSelect}>20</li>
                        <li onClick={handleSelect}>40</li>
                    </ul>
                </div>
            ) : (
                <Quiz number={selectedQuiz} />
            )}
        </>
    );
}

export default Main;