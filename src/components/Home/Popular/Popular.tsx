import React from 'react'
import './StylePopular.scss'
import { IPopular } from '../../../types/IPopular'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/hooks'
import { setCategories } from '../../../store/Categories/Categories.slice'

interface IPorpsPopular {
    popular: IPopular[]
}

const Popular: React.FC<IPorpsPopular> = ({ popular }) => {
    const dispatch = useAppDispatch()

    return (
        <div className='popular'>
            {popular?.map(popular => (
                <div className="popular_post" key={popular.id}>
                    <Link to={`/apple/${popular.categories}`} onClick={() => dispatch(setCategories(popular.categories))}>
                        <div className="post_title">
                            <h2>{popular.title}</h2>
                        </div>
                        <div className="post_img">
                            <img src={popular.images} alt="no Images" />
                        </div>
                        <div className="post_colors">
                            {Object.values(popular.colors).map(color => (
                                <img src={color} alt="No Images Color" key={color} />
                            ))}
                        </div>
                        <div className="post_pirceFrom">
                            <h4>от {popular.fromPrice} $</h4>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Popular