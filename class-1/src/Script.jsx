import logo from './logo.svg';
import './Script.css';

function Script() {

  const handleNameChange = () =>{
  
    const names = ['Bob', 'Kevin', 'Dave'],

      int = Math.floor(Math.random() * 3)

    return names[int]
  
  }

  return (
    <div className="App">

     <h1>Hello {handleNameChange()}</h1> 
      
    </div>
  );
}

export default Script;
