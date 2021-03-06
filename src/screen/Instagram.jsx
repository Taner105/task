import { useState } from "react";
import "./../App.css";
import Gonderiler from "./gonderiler";
import Reels from "./reels";
import Etiketlenenler from "./etiketlenenler";
import grid from "./../assets/icons/grid.png";
import video from "./../assets/icons/video.png";
import tag from "./../assets/icons/tag.png";
import Modal from "../components/modal/Modal";

function Instagram({ setOpenModal, openModal, modalData }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {openModal ? (
        <Modal />
      ) : (
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <img style={{ width: "15px" }} src={grid} alt="grid" />
              GÖNDERİLER
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <img style={{ width: "15px" }} src={video} alt="video" />
              REELS
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <img style={{ width: "15px" }} src={tag} alt="tag" />
              ETİKETLENENLER
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <Gonderiler
                modalData={modalData}
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <Reels />
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <Etiketlenenler />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Instagram;
