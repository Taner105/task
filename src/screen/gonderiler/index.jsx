import grid from "./../../assets/icons/grid.png"
import "./style.scss";
import g1 from "./../../assets/images/g1.jpg";
import g2 from "./../../assets/images/g2.jpg";
import g3 from "./../../assets/images/g3.jpg";
import g4 from "./../../assets/images/g4.jpg";
import g5 from "./../../assets/images/g5.jpg";
import g6 from "./../../assets/images/g6.jpg";

const Gonderiler = () => {
  function renderCard(item) {
    return (
      <>
        <div className="img-container" key={item.id}>
          <img className="img" src={item.image} alt="" />
      
        <div className="icon">
          <div>
            <img src={grid} />
            <span>{item.likeNumber}</span>
          </div>
          <div>
             <img src={grid} />
            <span>{item.comment}</span>
          </div>
        </div>
          </div>
      </>
    );
  }
  return (
    <div className="Gonderiler">
      {dummyData.map((item) => renderCard(item))}
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
    likeNumber: 14,
    comment: 12,
  },
  {
    id: 3,
    image: g3,
    likeNumber: 14,
    comment: 12,
  },
  {
    id: 4,
    image: g4,
    likeNumber: 14,
    comment: 12,
  },
  {
    id: 5,
    image: g5,
    likeNumber: 14,
    comment: 12,
  },
  {
    id: 6,
    image: g6,
    likeNumber: 14,
    comment: 12,
  },
];
