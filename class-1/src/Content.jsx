import { useState } from 'react'

const Content = () =>{

    const [name, setName] = useState('Kevin')

    const handleNameChange = () =>{
    
      const names = ['Bob', 'Kevin', 'Dave'],
  
        int = Math.floor(Math.random() * 3)
  
      setName(names[int])
    
    }



    const handleClick = () =>{
    
      console.log('working')
    
    }
    
    
    
    const handleClickTwo = (name) =>{
    
      console.log(`${name} was clicked`)
    
    }



    const handleClickThree = (e) =>{
    
      console.log(e)
    
    }

    

    return(

        <main>

          <p onDoubleClick={handleClick}>Hello {name}! </p>

          <button onClick={handleNameChange}>Set Name</button>
          
          <button onClick={() => handleClickTwo('Mike')}>Click Here</button>
          
          <button onClick={(e) => handleClickThree(e)}>Click Here</button>

        </main>

    )

}

export default Content