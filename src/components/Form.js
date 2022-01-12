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

    function validate() {
        const size = document.getElementById('sample-size').value;
        if (size === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(size)) {
            alert('Only numbers are allowed for this field');
            return;
        }
        if (parseInt(size) < 2) {
            alert('Only whole numbers greater than 2 are allowed');
            return;
        }

        const mean = document.getElementById('sample-mean').value;
        if (mean === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(mean)) {
            alert('Only numbers are allowed for this field');
            return;
        }     
       
        const dev = document.getElementById('standard-dev').value;
        if (dev === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(dev)) {
            alert('Only numbers are allowed for this field');
            return;
        }
        if (parseInt(dev) <= 0) {
            alert('Only numbers greater than 0 are allowed');
            return;
        }

        const hypo = document.getElementById('hypo-mean').value;
        if (hypo === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(hypo)) {
            alert('Only numbers are allowed for this field');
            return;
        }
    }

    function reset() {
        document.getElementById('sample-size').value = '';
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
                <button id="ok" onClick={validate}>OK</button>
                <button id ="reset">Reset</button>
            </form>
        </div>
    );
}

export default Form;