import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) =>{

    return(

        <form className="addForm" onSubmit={handleSubmit}>

            <label htmlFor="addItem">Add Item</label>

            <input 
                type="text"
                required
                id="addItem" 
                autoFocus 
                placeholder="Add Item" 
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />

            <button aria-label="Add Item">

                <FaPlus/>

            </button>

        </form>

    )

}

export default AddItem