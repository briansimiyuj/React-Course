const Content = () =>{

    const handleNameChange = () =>{
    
      const names = ['Bob', 'Kevin', 'Dave'],
  
        int = Math.floor(Math.random() * 3)
  
      return names[int]
    
    }



    const handleClick = () =>{
    
      console.log('working')
    
    }

    

    return(

        <main>

          <p>Hello {handleNameChange()}! </p>

          <button onClick={handleClick}>Click Here</button>

        </main>

    )

}

export default Content