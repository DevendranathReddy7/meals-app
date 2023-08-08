import './Navbar.css'
import search from '../../assests/icons8-search-24.png'
import profile from '../../assests/icons8-male-user-24.png'
import cart from '../../assests/icons8-cart-24.png'

const MenuBar = (props) => {
    return (
        <>
            <div className="nav-container">
                <div className="title">
                    <h3>React Meals</h3>
                </div>
                <div className="quickLinks">
                    <div className='icon-div'>
                        <div className='icon-shape'>
                            <img src={search} alt="search" className='icons' />
                        </div>
                        <div className='icon-name'>
                            <p>Search</p>
                        </div>
                    </div>

                    <div className='icon-div'>
                        <div className='icon-shape'>
                            <img src={profile} alt="profile" className='icons' />
                        </div>
                        <div className='icon-name'>
                            <p>Sign-in</p>
                        </div>
                    </div>

                    <div className='icon-div'>
                        <div className='icon-shape'>
                            <img src={cart} alt="cart" className='icons' />
                        </div>
                        <div className='icon-name'>
                            <p>Cart {props.count || undefined}</p>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default MenuBar;