import { useEffect, useState } from "react"
import axios from "axios"
import StudentForm from "./components/StudentForm"
import StudentList from "./components/StudentList"
function App() {
  const [students, setStudents] = useState([])
  const loadStudents = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data))  }
  useEffect(() => {
    loadStudents() }, [])
  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm loadStudents={loadStudents} />
      <StudentList students={students} loadStudents={loadStudents} />
    </div>
  )
}
export default App