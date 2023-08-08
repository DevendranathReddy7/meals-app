import './HomeScreen.css'
import AddButton from '../AddButton/AddButton'

const HomeScreen = (props) => {

    return (
        <>

            <div className="dish-container">
                <div className='item'>
                    <div className="dish-item">
                        <h4>Idly [3 Pieces]</h4>
                        <h4>90/-</h4>
                        <p>Idli is made from ground rice or rice flour mixed with ground urad dal, salt.</p>
                    </div>
                    <div>
                        <AddButton />
                    </div>
                </div>
                <hr />
                <div className='item'>
                    <div className="dish-item">
                        <h4>Ghee Dosa</h4>
                        <h4>110/-</h4>
                        <p>Served with Palli Chutney and Allam Chutney.</p>
                    </div>
                    <div>
                        <AddButton />
                    </div>
                </div>
                <hr />
                <div className='item'>
                    <div className="dish-item">
                        <h4>Mysore Bajji [4 Pieces]</h4>
                        <h4>90/-</h4>
                        <p>This mouth-watering snack is prepared with rice flour, baking soda, onion, all-purpose flour and ginger.</p>
                    </div>
                    <div>
                        <AddButton />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeScreen