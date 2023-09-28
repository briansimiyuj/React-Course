import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'

function Script() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shopping List'))) 


  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')


  const setAndSaveItems = (newItems) =>{
  
    setItems(newItems)

    localStorage.setItem('Shopping List', JSON.stringify(newItems))
  
  }

  const addItem = (item) =>{
  
    const id = items.length ? items[items.length - 1].id + 1 : 1,

          myNewItem = { 
            
            id, 
            
            checked: false, 
            
            item 
          
          },

          listItems = [...items, myNewItem]


    setAndSaveItems(listItems)
  
  }


  const handleCheck = (id) =>{
    
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} :item)

    setAndSaveItems(listItems)
 
  }



  const handleDelete = (id) =>{
 
    const listItems = items.filter(item => item.id !== id)

    setAndSaveItems(listItems)
 
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
        items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

     <Footer length={items.length} />
      
    </div>
  );
}

export default Script; 