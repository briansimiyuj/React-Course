const Content = () =>{

    const handleNameChange = () =>{
    
      const names = ['Bob', 'Kevin', 'Dave'],
  
        int = Math.floor(Math.random() * 3)
  
      return names[int]
    
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

          <p>Hello {handleNameChange()}! </p>

          <button onClick={handleClick}>Click Here</button>
          
          <button onClick={() => handleClickTwo('Mike')}>Click Here</button>
          
          <button onClick={(e) => handleClickThree(e)}>Click Here</button>

        </main>

    )

}

export default Content