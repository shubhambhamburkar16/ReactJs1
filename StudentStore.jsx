import { createContext, useState } from "react";


export const StudentContext = createContext()

export const StudentProvider = ({children}) =>{

        const[students, setStudent] = useState([])

        const addStudent=(student)=>{
            setStudent([...students, student])
        }

        const updateStudent = (stdid, updatedStudent) =>{
            setStudent(
                students.map((student)=> student.stdid===stdid ? updatedStudent : student)
            )
        }

        const deleteStudent = (stdid) =>{
            setStudent( students.filter((student)=> student.stdid !== stdid))
        }
        return(
          
            <StudentContext.Provider value={{students, addStudent, updateStudent, deleteStudent}}>
                {children}
            </StudentContext.Provider>

        )

}