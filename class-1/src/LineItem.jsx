import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) =>{

    return(

        <li className="item">  
                    
            <input 
                type="checkbox" 
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />

            <label
                onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked ? {textDecoration: "line-through"} : null)}
            >
                
                {item.item}
            
            </label>

            <FaTrashAlt 
                role="button" 
                tabIndex='0'
                onClick={() => handleDelete(item.id)}
                aria-label={`delete ${item.item}`}
            />
                    
        </li>

    )

}

export default LineItem