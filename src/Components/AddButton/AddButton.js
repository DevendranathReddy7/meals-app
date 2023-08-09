import { useState } from 'react'
import './AddButton.css'
const AddButton = (props) => {
    var [count, setCount] = useState(0)
    const addItem = () => {
        setCount(prev => prev + 1)
        props.onCount(prev => prev + 1)
    }
    const reduceHandle = () => {
        setCount(prev => prev - 1)
        props.onCount(prev => prev - 1)
    }
    const increaseandle = () => {
        setCount(prev => prev + 1)
        props.onCount(prev => prev + 1)
    }
    return (
        <>
            {count === 0 ? <div className='add-button-div'>
                <button className='add' onClick={addItem}>ADD</button>
            </div> :
                <div >
                    <button className='add-button-div add-cart-div'>
                        <p className='decrease' onClick={reduceHandle}>-</p>
                        <p>{count}</p>
                        <p className='decrease' onClick={increaseandle}>+</p>
                    </button>

                </div>}



        </>
    )
}
export default AddButton