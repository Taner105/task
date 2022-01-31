import './App.css';
import Modal from './components/modal/Modal';
import Instagram from './screen/Instagram';
import { useState } from "react";


function App() {
  const [openModal, setOpenModal] = useState(false)


  return (
    <div className="App">
      <Instagram setOpenModal={setOpenModal} openModal={openModal} />
      {openModal && <Modal closeModal={setOpenModal} openModal={openModal} />}


    </div>
  );
}

export default App;
