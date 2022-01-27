import { useState } from "react";
import "./../App.css";
import Gonderiler from "./gonderiler"
import Reels from "./reels"
import Etiketlenenler from "./etiketlenenler"
import grid from "./../assets/icons/grid.png"

function Instagram() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         <img src={grid} alt="grid" />
        Gönderiler
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Reels
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Etiketlenenler
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <Gonderiler/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <Reels/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         <Etiketlenenler/>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
