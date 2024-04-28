import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetLineupQuery } from '../../../store/api/apiProducts';
import './StyleLineup.scss';

const Lineup = () => {
    const { data } = useGetLineupQuery(null)
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollForward = () => {
        if (scrollRef.current !== null) {
            scrollRef.current.scrollLeft += 300;
        }
    };
    const scrollBackward = () => {
        if (scrollRef.current !== null) {
            scrollRef.current.scrollLeft -= 300;
        }
    };

    return (
        <div className='Lineup'>
            <div className='Lineup__item' ref={scrollRef}>
                {data?.map(lineup => (
                    <div className="item" key={lineup.id}>
                        <div className="Lineup__img">
                            <img src={lineup.images} alt="no IMages" />
                        </div>
                        <div className="Lineup__model">
                            <h2>{lineup.model}</h2>
                        </div>
                        <div className="Lineup__praise">
                            <p>{lineup.praise}</p>
                        </div>
                        <div className="Lineup__model_price">
                            <h4>${lineup.price} USD</h4>
                        </div>
                        <div className="Lineup__btn">
                            <button>
                                Перейти
                            </button>
                        </div>
                        <hr />
                        <div className="Lineup__processor">
                            <img src={lineup.processor.icon} alt="no icon" />
                            <p dangerouslySetInnerHTML={{ __html: lineup.processor.name }}></p>
                        </div>
                        <div className="Lineup__camera">
                            <img src={lineup.camera.icon} alt="no icon" />
                            <p dangerouslySetInnerHTML={{ __html: lineup.camera.text }}></p>
                        </div>
                        <div className="Lineup__batery">
                            <img src={lineup.battery.icon} alt="no icon" />
                            <p dangerouslySetInnerHTML={{ __html: lineup.battery.text }}></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Lineup__manage">
                <IoIosArrowBack color='#2d2d2d' size={35} onClick={scrollBackward} cursor={'pointer'} />
                <IoIosArrowForward color='#2d2d2d' size={35} onClick={scrollForward} cursor={'pointer'} />
            </div>
        </div>
    )
}

export default Lineup