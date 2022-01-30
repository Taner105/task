import "./style.scss";
import r1 from "../../assets/images/r1.jpg";
import r2 from "../../assets/images/r2.jpg";
import r3 from "../../assets/images/r3.jpg";
const Reels = () => {
  const reelData = [
    {
      id: 1,
      image: r1,
      likeNumber: 13,
      comment: 0,
    },
    {
      id: 2,
      image: r2,
      likeNumber: 4,
      comment: 0,
    },
    {
      id: 3,
      image: r3,
      likeNumber: 8,
      comment: 0,
    },
    {
      id: 4,
      image: r1,
      likeNumber: 23,
      comment: 2,
    },
  ];
  return (
    <div className="Reels-container">
      {reelData.map((item, index) => {
        return (
          <div className="reelsMap" key={index}>
            <img className="img" src={item.image} alt="image" />
          </div>
        );
      })}
    </div>
  );
};
export default Reels;
