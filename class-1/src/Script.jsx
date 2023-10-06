import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react'

function Script() {

  const API_URL =  "http://localhost:8000/items"



  const [items, setItems] = useState([]) 


  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')


  useEffect(() =>{
  
    const fetchItems = async () =>{
    
      try{

        const response = await fetch(API_URL)

        const listItems = await response.json()

        setItems(listItems)

        console.log(listItems )

      }catch(err){

        console.log(err.stack)

      }
    
    }

    fetchItems()
  
  }, [])


  const addItem = (item) =>{
  
    const id = items.length ? items[items.length - 1].id + 1 : 1,

          myNewItem = { 
            
            id, 
            
            checked: false, 
            
            item 
          
          },

          listItems = [...items, myNewItem]


    setItems(listItems)
  
  }


  const handleCheck = (id) =>{
    
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} :item)

    setItems(listItems)
 
  }



  const handleDelete = (id) =>{
 
    const listItems = items.filter(item => item.id !== id)

    setItems(listItems)
 
  }


  const handleSubmit = (e) =>{

    e.preventDefault()

    if(!newItem) return

    // Add a new item

    addItem(newItem)
  
    setNewItem('')
  
  }


  return (
    <div className="App">

     <Header title="Grocery List"/>
     
     <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
     />
     
     <SearchItem
        search={search}
        setSearch={setSearch}
     />

     <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

     <Footer length={items.length} />
      
    </div>
  );
}

export default Script; 