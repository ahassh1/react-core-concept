
import './App.css'
import Todo from './Todo'
import Actor from './Actor';
import Singer from './Singer';
import Counter from './counter';
import Batsman from './Batsman';



function App() {

  const actors = ['polash','habib', 'ahasan','jasim','bappa raj','rajjak']

  const singers =[
    {id:1, name:'mahfuz' , age: 55},
    {id:2, name:'minar' , age: 35},
    {id:3, name:'shuboro' , age: 45}
  ]

  const time =50;

  function handleClicked(){
      alert('i am clicked')
  }

  const handleClicked2=()=>{
    alert('i am clicked2')
  }

  const handleclick = (num)=>{
    const newNum = num + 5;
    alert(newNum)
  }

  return (

    <>
    <Batsman></Batsman>

    {
      actors.map(actor => <Actor key={actor} actor ={actor}></Actor>)
    }

    {
      singers.map(singer => <Singer key={singer.id}
        singer={singer}></Singer>)
      }
    
      <Counter></Counter>
      <Person></Person>
      <Student name='ahasan' tech='js'></Student>
      <Student name= 'habib' tech='java'></Student>
      <Student name= 'ajof' tech='python'></Student>
      <Developer></Developer>
      <Player name = 'Tamim' runs = '6000'></Player>
      <Player name= 'Mashrafee' ></Player>

      <Todo
        task= 'learn react js'
        isTrue={true}
       time={time}>
      </Todo>

      <Todo task= 'learn node js' isTrue={false}></Todo>
      <Todo task= 'shower now' isTrue={true} time='120'></Todo>
    
     <button onClick={handleClicked}>click me </button>
     <button onClick={handleClicked2}>click me 2</button>
     <button onClick={()=>{alert('clicked me 3')}}>click me 3</button>
     <button onClick={()=>handleclick(10)}>click me 4</button>
      
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
      <h1>Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Laboriosam architecto, asperiores 
         voluptates maxime numquam cum beatae 
         ipsa similique veritatis, at minima.</h1>

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
  function Player({name,runs='1000'}){
    return(
      <div className='first'>
        <h3>Name: {name}</h3>
        <p>Run: {runs}</p>
      </div>
    )
  }

    
export default App
 