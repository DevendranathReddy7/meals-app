import './HomeScreen.css'
import AddButton from '../AddButton/AddButton'
import { useState } from 'react'

const HomeScreen = (props) => {
    const [counter, setCounter] = useState(0)
    const countHandler = (value) => {
        setCounter(value)
        props.onCount(counter)
    }
    return (
        <>
            <div className="dish-container">
                {props.items.map(eachItem =>
                    <div >
                        <div className='item'>
                            <div className="dish-item">
                                <h4>{eachItem.name}</h4>
                                <h4>{eachItem.price}</h4>
                                <p>{eachItem.desc}</p>
                            </div>
                            <div>
                                <AddButton onCount={countHandler} />
                            </div>
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        </>
    )
}
export default HomeScreen