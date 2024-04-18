import { Badge } from 'antd';
import { FaApple } from 'react-icons/fa';
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import './StyleHeader.scss';

const Header = () => {    
    const count = useAppSelector(state => state.CartSlice.cart)
    const totalCount = count.reduce((sum, item) => sum + item.count, 0)

    return (
        <header>
            <div className="header__logo">
                <Link to='/'>
                    <FaApple color='#fff' size={40}/>
                    <h1>IStore</h1>
                </Link>
            </div>
            <div className="header__link">
                <Link to='/'>Home</Link>
                <Link to='/apple'>Apple</Link>
                <div className="basket">
                    <Link to={'/cart'}>
                        <div className="badge">
                            <Badge count={totalCount} />
                        </div>
                        <SlBasket size={25} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header