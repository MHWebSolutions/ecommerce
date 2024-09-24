import MyImage from '../../assets/Group 1.svg'
import Cart from '../../assets/shopping-cart.svg'
import style from './style.css'
import Heart from '../../assets/heart.svg'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    const handleFav = () => {
        navigate('/favorites')
    }

    const handleCart = () => {
        navigate('/checkout')
    }

    return(
        <div className="Nav">
            <div className="logo">
                <img src={MyImage} alt="" onClick={handleHome}/>
            </div>

            <div className="user_data">
                <img src={Heart} alt="" onClick={handleFav}/>
                <img src={Cart} alt="" onClick={handleCart}/>
            </div>
        </div>
    )
}