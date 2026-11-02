import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

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
export default App */

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
