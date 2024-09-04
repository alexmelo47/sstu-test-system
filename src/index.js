import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
/*
, { Profiler } from 'react';
function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Aggregate or log render timings...
    console.log(baseDuration);
}*/

root.render(
    <App />
);

/*
    <Profiler id="App" onRender={onRender}>
        <App />
    </Profiler>
*/