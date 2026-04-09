import { useState } from "react"
import axios from "axios"
function StudentForm({ loadStudents }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")
    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/students", {
            name, email, course
        }).then(() => {
            loadStudents()
        })
    }
    return (
        <form onSubmit={submit}>
            <h2>Add Student</h2>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Course" onChange={(e) => setCourse(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}
export default StudentForm