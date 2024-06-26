import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IBanner } from "../../../types/IBanner";
import './StyleBanner.scss';
import { Link } from "react-router-dom";

interface IpropsBanner {
    data: IBanner[]
}

const Banner: React.FC<IpropsBanner> = ({ data }) => {
    return (
        <div className='banner'>
            {data?.map(banner => (
                <div key={banner.id} className='banner_banner'>
                    <div className="banner_img">
                        <img src={banner.images} alt="no images" />
                    </div>
                    <div className="banner_info">
                        <h1 dangerouslySetInnerHTML={{ __html: banner.title }}></h1>
                        <Link to='/video'>
                            <button>
                                смотреть IPhone
                                <FaArrowRightLong />
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Banner