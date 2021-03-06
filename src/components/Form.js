import { useState } from 'react';

function Form(props) {
    const [disable, setDisable] = useState(true);
    
    //Disables Hypothesized mean field and label
    function checkClick() {
        setDisable(!disable);
        document.getElementById('hypo-mean').value = '';

        const label = document.getElementById('hypo-label');
        if (disable) {
            label.style.color = 'darkslategray';
        }
        else {
            label.style.color = 'lightgray';
        }
    }

    //Validates input values and sets table values if validation is successful
    function validate() {
        const size = document.getElementById('sample-size');
        if (size.value === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(size.value)) {
            alert('Only numbers are allowed for this field');
            return;
        }
        if (parseInt(size.value) < 2) {
            alert('Only whole numbers greater than 1 are allowed');
            return;
        }
        if (!Number.isInteger(parseFloat(size.value))) {
            alert('Only whole numbers greater than 1 are allowed');
            return;
        }
        const mean = document.getElementById('sample-mean');
        if (mean.value === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(mean.value)) {
            alert('Only numbers are allowed for this field');
            return;
        }     
       
        const dev = document.getElementById('standard-dev');
        if (dev.value === '') {
            alert('Please fill in all active fields');
            return;
        }
        if (isNaN(dev.value)) {
            alert('Only numbers are allowed for this field');
            return;
        }
        if (parseFloat(dev.value) <= 0) {
            alert('Only numbers greater than 0 are allowed');
            return;
        }

        const hypo = document.getElementById('hypo-mean');
        if (!hypo.disabled) {
            if (hypo.value === '') {
                alert('Please fill in all active fields');
                return;
            }
            if (isNaN(hypo.value)) {
                alert('Only numbers are allowed for this field');
                return;
            }
        }

        props.setSize(parseInt(size.value));
        props.setMean(mean.value);
        props.setDev(dev.value);
        props.setHypo(hypo.value);
        props.setOpenModal(true);
    }

    function formReset() {
        setDisable(true);

        const label = document.getElementById('hypo-label');
        label.style.color = 'lightgray';
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
                <button id="ok" type="button" onClick={validate}>OK</button>
                <button id ="reset" type="reset" onClick={formReset}>Reset</button>
            </form>
        </div>
    );
}

export default Form; 