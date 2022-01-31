import begen from "../../assets/icons/begen.png";
import yorum_1 from "../../assets/icons/yorum_1.png";
import { FcLike } from "react-icons/fc";

const RenderCard = ({ item, setOpenModal, openModal }) => {
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div onClick={handleModal} className="img-container" key={item.id}>
        <img className="img" src={item.image} alt="" />

        <div className="icon">
          <div>
            {/* <img src={begen} /> */}
            <FcLike />
            <span>{item.likeNumber}</span>
          </div>
          <div>
            <img src={yorum_1} />
            <span>{item.comment}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderCard;
