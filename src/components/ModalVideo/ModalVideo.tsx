import { IoClose } from "react-icons/io5";
import './styleModalVideo.scss';

const ModalVideo = () => {

    return (
        <div className='ModalVideo'>
            <div className="icon__close">
                <IoClose size={50} cursor={'pointer'} />
            </div>
            <iframe
                width="1280"
                height="720"
                frameBorder="0"
                src="https://www.youtube.com/embed/EcGXCJm3XMA"
            >
            </iframe>
        </div>

    )
}

export default ModalVideo