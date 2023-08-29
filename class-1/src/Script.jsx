import logo from './logo.svg';
import './Script.css';

function Script() {

  const name = 'Brian'

  return (
    <div className="App">

      <p>html</p>
        
      <p>{'Brian'}</p>

      <p>{1}</p>

      <p>{[1, 2, 3]}</p>

      <p>[1, 2, 3]</p>
      
      <p>{name}</p>

      {/* <p>{true}</p> */}

      {/* <p>{{a: 1, b: 2}}</p> */} 
      
    </div>
  );
}

export default Script;
