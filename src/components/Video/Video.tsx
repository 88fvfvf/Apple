import { FaArrowLeft } from "react-icons/fa6";
import './stylelVideo.scss';
import { Link } from "react-router-dom";

const ModalVideo = () => {

    return (
        <div className='ModalVideo'>
            <div className="icon__close">
                <Link to={'/'}>
                    <FaArrowLeft size={30} />
                    <h4>Вернуться в главное меню</h4>
                </Link>
            </div>
            <div className="video">
                <iframe
                    width="1280"
                    height="720"
                    frameBorder="0"
                    src="https://www.youtube.com/embed/EcGXCJm3XMA"
                >
                </iframe>
            </div>
        </div>

    )
}

export default ModalVideo