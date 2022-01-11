import { useState } from 'react';

function Form() {
    const [disable, setDisable] = useState(true);
    function checkClick() {
        setDisable(!disable);

        const label = document.getElementById('hypo-label');
        if (disable) {
            label.style.color = 'darkslategray';
        }
        else {
            label.style.color = 'lightgray';
        }
    }
    
    return (
        <div id="form-div">
            <form id="main-form">
                <label htmlFor="sample-size">Sample size: </label>
                <input type="text" id="sample-size"></input><br/>
                <label htmlFor="sample-mean">Sample mean: </label>
                <input type="text" id="sample-mean"></input><br/>
                <label htmlFor="standard-dev">Standard deviation: </label>
                <input type="text" id="standard-dev"></input><br/>
                <input type="checkbox" id="hypo-check" onClick={checkClick}></input>
                <label htmlFor="hypo-check">Perform hypothesis test</label><br/><br/>
                <label htmlFor="hypo-mean" id="hypo-label" style={{color: 'lightgray'}}>Hypothesized mean: </label>
                <input type="text" id="hypo-mean" disabled={disable}></input><br/>
                <button id="ok">OK</button>
                <button id ="reset">Reset</button>
            </form>
        </div>
    );
}

export default Form;