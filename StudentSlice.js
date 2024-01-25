import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students : []
}

const studentSlice = createSlice({
    name : 'student',
    initialState,
    reducers :{
        
    addStudent : (state, actions)=>{
           console.log('add Student from student slice is called ')
           state.students.push(actions.payload)
    },

     updateStudent : (state, actions) =>{
       
        console.log('studentSlice updateStudent called')

        const {id, updatedStudent}= actions.payload
        const index = state.students.findIndex(std => std.id === id)

        if(index !== -1){
            state.students[index] = {...state.students[index], ...updatedStudent}
        }
    },

     deleteEmployee : (state, actions) =>{
       console.log('Student Slice delete function called')
        state.students = state.students.filter(student => student.id !== actions.payload)
    }

    }
})

export const {addStudent, updateStudent, deleteStudent} = studentSlice.actions
export default studentSlice.reducer