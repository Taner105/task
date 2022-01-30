import g1 from "../../assets/images/g1.jpg";
import indir from "../../assets/images/indir.jfif";
import begen from "../../assets/icons/begen.png";
import yorum_1 from "../../assets/icons/yorum_1.png";
import gönder_1 from "../../assets/icons/gönder_1.png";
import kaydet_1 from "../../assets/icons/kaydet_1.png";
import "./Modal.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";
const Modal = ({ closeModal, openModal }) => {
  return (
    <div isOpen={openModal} className="modalBackground">
      
      <div className="modalContainer">
        <div className="img-five">
          <img className="modal-img" src={g1} alt="img" />
        </div>
        <div>
          <div className="body">
            <div className="right-header">
              <img className="indir1" src={indir} alt="img" />
            </div>
            <div
              style={{
                lineHeight: "4px",
                marginLeft: "10px",
                marginTop: "25px",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                jobswireapp .<span style={{ color: "#0095F6" }}> Takip Et</span>
              </p>
              <p style={{ fontSize: "14px" }}>Danger Twins . Thing of Beauty</p>
            </div>
            <div style={{ marginLeft: "180px" }}>
              <h3>
                <BiDotsHorizontalRounded />
              </h3>
            </div>
          </div>
          <hr />
          <div className="comment_text">
            <div>
              <img className="indir2" src={indir} alt="img" />
            </div>
            <div>
              <p
                style={{
                  marginLeft: "10px",
                  fontSize: "14px",
                  lineHeight: "18px",
                }}
              >
                {" "}
                <span style={{ fontWeight: "bold" }}>Jobswireapp</span> Çılgın
                dahimiz Elon Musk'a göre insanların başarılı olmasını engelleyen
                50 bilişsel ön yargının olduğunu biliyor muydun?
              </p>
              <span style={{ marginLeft: "10px", fontSize: "14px" }}>2g</span>
            </div>
          </div>

          <div className="com_like_send_log">
            <div className="com_like_send">
              <img id="like" src={begen} alt="begen" />
              <img id="like" src={yorum_1} alt="yorum_1" />
              <img id="like" src={gönder_1} alt="gönder_1" />
            </div>
            <div>
              <img id="log" src={kaydet_1} alt="kaydet_1" />
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid rgb(194, 191, 191)",
              padding: "0 0 0px 0",
            }}
          >
            <h4 style={{ fontSize: "14px", marginLeft: "10px" }}>13 beğenme</h4>
            <p style={{ fontSize: "10px", marginLeft: "10px" }}>2 GÜN ÖNCE</p>
          </div>

          <div className="footer-comment">
            <h4>
              <VscSmiley />
            </h4>
            <p style={{ marginRight: "320px", fontSize: "14px" }}>
              Yorum ekle...
            </p>
            <p
              style={{ color: "#0095F6", marginRight: "5px", fontSize: "15px" }}
            >
              Paylaş
            </p>
          </div>
        </div>
      </div>
     <div className="times">
            <FaTimes style={{color:"#fff", width:"40px", height:"40px", marginBottom:"500px", marginLeft:"50px"}} onClick={() => closeModal(false)} />
     </div>
      
    </div>
  );
};
export default Modal;
