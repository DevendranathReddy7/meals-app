import './Navbar.css'
import search from '../../assests/icons8-search-24.png'
import profile from '../../assests/icons8-male-user-24.png'
import cart from '../../assests/icons8-cart-24.png'

const MenuBar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="title">
                    <h3>React Meals</h3>
                </div>
                <div className="quickLinks">
                    <div >
                        <img src={search} alt="search" className='icons' />
                        <span className='icon-name'>Search</span>
                    </div>
                    <div >
                        <img src={profile} alt="profile" className='icons' />
                        <span className='icon-name'>Sign-in</span>
                    </div>
                    <div >
                        <img src={cart} alt="cart" className='icons' />
                        <span className='icon-name'>Cart</span>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MenuBar;