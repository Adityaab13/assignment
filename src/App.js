import React, { useState } from 'react'
import {Navbar, Cards} from './components'
import {Header, Footer, Features, Card} from './containers'
import './App.css'
const App = () => {
  const [assignments, setAssignment] = useState([{name: "Final", course: "CS 545", subtasks: ["task 1", "task 2"]},
  {name: "Final 2", course: "CS 545", subtasks: ["task 3", "task 4"]}]) 
  const [courses, setCourse] = useState(["CS 545"])

  const listAssignments = assignments.map((assignment) =>  <li><Card name={assignment.name} course={assignment.course} subtasks={assignment.subtasks}/></li>);
  const listCourses = courses.map((course) =>  <li>{course}</li>);

  const addCourse = () => {
    setCourse(courses => [...courses, "SSW 555"])
  }

  const addAssignment = () => {
    setAssignment(assignments => [...assignments, {name: "Final 3", course: "CS 545", subtasks: ["task 5", "task 6"]}]);
  }

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <button onClick={addCourse}>Add Course</button>
        <button onClick={addAssignment}>Add Assignment</button>
      </div>
      <Features />

      <h1>Courses</h1>
      <ul>{listCourses}</ul>

      <h1>Assignments</h1>
      <ul>{listAssignments}</ul>
      <Footer />
    </div>
  )
}

export default App