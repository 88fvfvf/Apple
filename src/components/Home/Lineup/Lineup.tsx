import { useGetLineupQuery } from '../../../store/api/apiProducts';
import './StyleLineup.scss';

const Lineup = () => {
    const { data } = useGetLineupQuery(null)

    return (
        <div className='Lineup'>
                <div className='Lineup__item'>
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
        </div>
    )
}

export default Lineup