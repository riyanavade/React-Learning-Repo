import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
//import {useState} from 'react'

/*function Student(props){
 return(
    <div>
      <h1>Student Details</h1>
      <h3>Name: {props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Semester: {props.semester}</p>
    </div>
 )
}
function App(){
  return <Student name="Riya" course="MCA" semester="3rd" />
}
export default App 

function Profile(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <p>{props.course}</p>
      <p>{props.semester}</p>

      <h1>SKILLS</h1>
      <ul>
        <li>{props.skill1}</li>
        <li>{props.skill2}</li>
        <li>{props.skill3}</li>
      </ul>
      <h1>Learning Full Stack Development</h1>
      <button>Contact Me</button>
    </div>
  )
}
function App(){
  return <Profile name="Riya V Navade" bio="I am a passionate web developer" course="MCA Student" semester="3rd Semester" skill1="HTML" skill2="CSS" skill3="Javascript" />
}
export default App
*/

/*the normal variable will not work or unable to update the UI so we use usestate hook    
function counter(){
  let count = 0;
  function increment(){
    count++;
    console.log(count);
  }
  
  return (<button onClick={increment}>{count}</button>
  );
}
export default App


counter APP using usestate hook
function Counter(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>      <button onClick={() => setCount(count - 1)}>Decrement</button> <button onClick={() => setCount(0)}>Reset</button>
    </div>

  );
}
export default Counter;

//name state using string 
function ChangeName(){
  const [name,setName]=useState("Riya");
  return(
    <div>
      <h1>Name: {name}</h1>
      <button onClick={() => setName("Riya V Navade")}>Change Name</button>  <button onClick={() => setName("Riya")}>Previous Name</button>
    </div>
  );
}
export default ChangeName;

//Event HAndling in React
function App(){
function handleClick(){
  alert("Button Clicked");
}
return(
  <button onClick={handleClick}>Click Me</button>
);}
export default App;*/

//name display using input event
// function App(){
//   const [name,setName]=useState("");
//   function handleChange(event){
//     setName(event.target.value);
//   }
//   return(
//     <div>
//       <h2> name event </h2>
//       <input type="text" onChange={handleChange}/>
//       <p>Name: {name}</p>
//     </div>
    
//   );
// }
// export default App;

//react counter app
function Counter(){
  const [count,setCount]=useState(0);
  let message;
  if(count < 0){
        message=<h2>it is negative</h2> ;  
         }
  else if (count>0) {
        message=<h2>it is positive</h2>;
      }
  else {
        message=<h2>it is zero</h2>;
      }
  return (
    
    <div>
      <h2>Count: {count}</h2>
      {message}
      <button onClick={() => setCount(count+1)}>Addition</button> 
      <button onClick={()=> setCount(count-1)}>Subtraction</button> 
      <button onClick={()=>setCount(0)}>Reset</button>
      
    </div>
  );
}
export default Counter;