
import './App.css'

function App() {

  return (
    <>
    
      <Person></Person>
      <Student name='ahasan' tech='js'></Student>
      <Student name= 'habib' tech='java'></Student>
      <Student name= 'ajof' tech='python'></Student>
      <Developer></Developer>
    
    
     
    </>
  )
}

function Person(){
  return (
   <div className='first'>
     <p>polash</p>
     <div style={{
      color:"red", 
      fontSize: '20px'
     }
     }>
     <h1>ahasan habib polash he is a very nice hearted person</h1>
     <h4>hi there this is me</h4>
     </div>
     <h5>it's my first react native project that i prepare to done</h5>
   </div>
  )
}

 function Student(props){
  console.log(props)

  return(
    <div className='students'>
      <h1>hi there </h1>
      <h2> hello</h2>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam architecto, asperiores voluptates maxime numquam cum beatae ipsa similique veritatis, at minima.</h1>
      <h3>Developer: {props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  )
 }

  function Developer(){
    const name= 'polash';
    const age= 20;

    const newStyle = {
      color:'tomato',
      fontSize: '23px',
      textAlign:'left',
      margin: '20px'
    }
    return(
         <p style={newStyle}>I am the person : {name} {age}</p>
    )
  }
export default App
