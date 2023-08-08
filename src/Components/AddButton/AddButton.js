import './AddButton.css'
const AddButton = (props) => {
    return (
        <>
            <div className='add-button-div'>
                <button className='add'>ADD</button>
            </div>

            <div >
                <button className='add-button-div add-cart-div'>
                    <p className='decrease'>-</p>
                    <p>{0}</p>
                    <p className='decrease'>+</p>
                </button>
            </div>

        </>
    )
}
export default AddButton