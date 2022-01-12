import './Modal.css';

//Modal overlay to display the table and disallow interactivity with the form
function Modal(props) {
    return (
        <div id="background">
            <div id="table-div">
                <table>
                    <tbody>
                        <tr>
                            <th>Sample size</th>
                            <th>Sample mean</th>
                            <th>Standard deviation</th>
                            <th>Hypothesized mean</th>
                        </tr>
                        <tr>
                            <td>{props.size}</td>
                            <td>{props.mean}</td>
                            <td>{props.dev}</td>
                            <td>{props.hypo}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" id="back-button" onClick={() => props.setOpenModal(false)}>Back</button>
            </div>
        </div>
    );
}

export default Modal;