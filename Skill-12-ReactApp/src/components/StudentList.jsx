import axios from "axios";
function StudentList({ students, loadStudents }) {
    const deleteStudent = (id) => {
        axios.delete(`http://localhost:8080/students/${id}`)
            .then(() => loadStudents())
    }
    return (
        <div>
            <h2>Students</h2>
            {students.map((s) => (
                <div key={s.id}>
                    {s.name} | {s.email} | {s.course}
                    <button onClick={() => deleteStudent(s.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
   )
}
export default StudentList