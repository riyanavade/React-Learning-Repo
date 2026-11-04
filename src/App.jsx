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
export default App;

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

//react toggle app
function App(){
  const[status,setStatus]=useState("off");
  let message;
  if (status ==='OFF'){
    message='ON';
  }
  else{
    message='OFF';
  }
  return(
    <div>
   <h2> Toggle App</h2>
    <h4>Status:{status}</h4>
<button onClick={() => setStatus(message)}>
        {status === "off" ? "Turn On" : "Turn Off"}
      </button>
    </div>
  );
}
export default App;

//color changing pallet
function Pallet(){
  const [color,setColor]=useState("#ffffff");
  return (
    <div>
        <h2>color changing pallet</h2>
        <input type="color" value={color} onChange={(event)=>setColor(event.target.vakue)}/>

<div
  style={{
    width:"250px",
    height:"250px",
    bachgroundColor:color,
    border: "1px solid white",
    marginTop:"10px",
  }}>
</div>
  <p>Selected Color:{color}</p>
    </div>
   
    
  );
}
export default Pallet;

//map() function for displaying each element in the array
function App(){
  const students=['vittal','panduranga','rama','krishna','vasudev','hari','paramatma'];
  return (
    <div>
    <h2>Student Names</h2>

    {students.map((student) => (
      <p>{student}</p>
    ))}
    </div>
  );
}
export default App;

//display list of items through object
function display(){
  const obj1=[{
    ID:1,
    name:"Riya",
    course:"MCA",
    RollNo: 23
  },{
    ID:2,
    name:"sangeeta",
    course:"MCA",
    RollNO: 77
  }];

  return (
    <div>
      <h2> displaying list of items through objects</h2>
      {obj1.map((object) => (
        <div>
          <p>Name: {object.name}</p>
          <p>RollNO: {object.RollNO}</p>
          <h2>using key concept</h2>
          <p key={object.ID}>{object.name}</p>
        </div>
      ))}


    </div>
  );
}
export default display;

//using an array index as a key
function App() {
    const subjects = ["JavaScript", "React", "Python"];

    return (
        <div>
            {subjects.map((subject, index) => (
                <p key={index}>
                    {subject}
                </p>
            ))}
        </div>
    );
}

export default App;*/

//this is React To-Do App

function Form() {

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        if (input.trim() === "") {
            return;
        }

        setTasks([...tasks, input]);
        setInput("");
    }

    return (
        <div>
            <h2>To-Do App</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Enter your task"
                    onChange={(event) => setInput(event.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>

            <h3>My Tasks</h3>

            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}

        </div>
    );
}

export default Form;


