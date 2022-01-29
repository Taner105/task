import g1 from "../../assets/images/g1.jpg"
import indir from "../../assets/images/indir.jfif"
import begen from "../../assets/icons/begen.png"
import yorum_1 from "../../assets/icons/yorum_1.png"
import gönder_1 from "../../assets/icons/gönder_1.png"
import kaydet_1 from "../../assets/icons/kaydet_1.png"
import "./Modal.scss"
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { VscSmiley } from 'react-icons/vsc';
const Modal = ({closeModal, openModal}) => {
    return(
        <div isOpen={openModal} className="modalBackground">
            <div className="modalContainer">
                <button className="titleCloseBtn" onClick={() => closeModal(false)}> X </button>
                <div className="img-five">
                    <img className="modal-img" src={g1} alt="img" />
                    
                </div>
                <div className="body">
                    <div className="right-header">
                        <img className="indir" src={indir} alt="img" />
                    </div>
                    <div>
                        <p>jobswireapp .<span style={{color:"#0095F6"}}> Takip Et</span></p>
                        <p>Danger Twins . Thing of Beauty</p>
                    </div>
                    <div>
                        <BiDotsHorizontalRounded />
                    </div>
                </div>
                <div>
                    <div>
                        <img className="indir" src={indir} alt="img" />
                    </div>
                    <div>
                        <p>Çılgın dahimiz Elon Musk'a göre insanların başarılı olmasını engelleyen 50 bilişsel ön yargının olduğunu biliyor muydun?</p>
                        <span>2g</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={begen} alt="begen" />
                        <img src={yorum_1} alt="yorum_1" />
                        <img src={gönder_1} alt="gönder_1" />
                    </div>
                    <div>
                        <img src={kaydet_1} alt="kaydet_1" />
                    </div>
                </div>
                <div>
                    <h4>13 beğenme</h4>
                    <p>2 GÜN ÖNCE</p>
                </div>
                <div>
                    <VscSmiley />
                    <p>Yorum ekle...</p>
                    <p>Paylaş</p>
                </div>
            
                
            </div>

        </div>
    )
}
export default Modal;