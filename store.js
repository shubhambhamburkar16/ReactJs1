import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from './EmployeeSlice'
import studentReducer from './StudentSlice'

const store = configureStore(
    {
        reducer : {
            employee : employeeReducer,
            student  : studentReducer,
        },
    }
)

export default store