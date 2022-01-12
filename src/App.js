import { useState } from 'react';

import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [size, setSize] = useState('');
  const [mean, setMean] = useState('');
  const [dev, setDev] = useState('');
  const [hypo, setHypo] = useState('');

  return (
    <div className="App">
      <Form setOpenModal={setOpenModal}
            setSize={setSize}
            setMean={setMean}
            setDev={setDev}
            setHypo={setHypo}/>
      {openModal && <Modal setOpenModal={setOpenModal} /*Opens modal component only if openModal is true (when OK button is clicked)*/
                           size ={size}
                           mean={mean}
                           dev={dev}
                           hypo={hypo}/>}
    </div>
  );
}

export default App;
