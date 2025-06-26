import React from 'react';
import '../ProgressBar.css';

const ProgressBar = ({ leftPercent, rightPercent }) => {
    const totalPercent = leftPercent + rightPercent;

    const leftWidth = (leftPercent / totalPercent) * 100;
    const rightWidth = (rightPercent / totalPercent) * 100;

    return (
        <div className="progress-container">
            <div
                className="progress-bar left-bar"
                style={{ width: `${leftWidth}%` }}
            ></div>
            <div
                className="progress-bar right-bar"
                style={{ width: `${rightWidth}%` }}
            ></div>
            <div className="progress-text">
                <span>{leftPercent}% left</span> | <span>{rightPercent}% right</span>
            </div>
        </div>
    );
};

export default ProgressBar;
