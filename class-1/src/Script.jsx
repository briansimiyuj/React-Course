import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'

function Script() {

  const [items, setItems] = useState([

    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },

    {
        id: 2,
        checked: false,
        item: "Item 2"
    },

    {
        id: 3,
        checked: false,
        item: "Item 3"
    }

  ]) 


  const [newItem, setNewItem] = useState('')


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

    // console.log(newItem)

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