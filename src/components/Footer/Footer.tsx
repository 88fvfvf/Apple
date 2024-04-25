import { Link } from 'react-router-dom'
import './StyleFooter.scss'
import { FaApple } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <Link to='/'>
                <FaApple color='#fff' size={40} />
                <h1>IStore</h1>
            </Link>
        </footer>
    )
}

export default Footer