import g1 from "./../../assets/images/g1.jpg";
import g2 from "./../../assets/images/g2.jpg";
import g3 from "./../../assets/images/g3.jpg";
import g4 from "./../../assets/images/g4.jpg";
import g5 from "./../../assets/images/g5.jpg";
import g6 from "./../../assets/images/g6.jpg";
import "./style.scss";
import RenderCard from "../../components/card/RenderCard.jsx";

const Gonderiler = ({ setOpenModal, openModal, modalData }) => {
  return (
    <div className="Gonderiler">
      {dummyData.map((item, key) => (
        <RenderCard
          dummyData={dummyData}
          modalData={modalData}
          setOpenModal={setOpenModal}
          openModal={openModal}
          item={item}
          key={key}
        />
      ))}
    </div>
  );
};
export default Gonderiler;

const dummyData = [
  {
    id: 1,
    image: g1,
    likeNumber: 14,
    comment: 12,
  },
  {
    id: 2,
    image: g2,
    likeNumber: 5,
    comment: 1,
  },
  {
    id: 3,
    image: g3,
    likeNumber: 8,
    comment: 0,
  },
  {
    id: 4,
    image: g4,
    likeNumber: 10,
    comment: 5,
  },
  {
    id: 5,
    image: g5,
    likeNumber: 12,
    comment: 12,
  },
  {
    id: 6,
    image: g6,
    likeNumber: 5,
    comment: 3,
  },
];
