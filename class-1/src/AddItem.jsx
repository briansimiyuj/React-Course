import { FaPlus } from 'react-icons/fa'

const AddItem = () =>{

    return(

        <form className="addForm">

            <label htmlFor="addItem">Add Item</label>

            <input 
                type="text"
                required
                id="addItem" 
                autoFocus 
                placeholder="Add Item" 
            />

            <button aria-label="Add Item">

                <FaPlus/>

            </button>

        </form>

    )

}

export default AddItem