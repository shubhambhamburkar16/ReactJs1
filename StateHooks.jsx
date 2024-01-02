import {useState} from 'react'



const UseStateHook = () =>{
const [name, updateName] = useState("Shubham")
const[count, updateCount] = useState(0)
const [person, updatePerson] = useState({name:'Alpesh', age:22})
const [isLoggeIn, setLoggedIn] = useState(false)
const [arrayVal, updateArray] = useState([1,2,3,4,5,6])
const nameChange=()=>{
    updateName('Aakanksha')
}
const changeCount=()=>{
    updateCount(count+1)
}
const changePerson=()=>{
    updatePerson(prePerson => ({...prePerson, name:'Shantanu'}))
}
const changeArray=()=>{
    updateArray(arrayVal => ([...arrayVal, 9,8,7,6,52,45]))
}
    return(
       <>
       <h3>
        Use State Hook
       </h3>
       <p>Name is: {name}</p>
       <button type="button" class="btn-btn-primary"  onClick={nameChange}>Name Change</button>
       
       <p>Count is: {count}</p>
       <button type="button" class="btn btn-secondary" onClick={changeCount}>Count</button>
       <p>Person is: {JSON.stringify(person)}</p>
       <button type="button" class="btn btn-success" onClick={changePerson}>Update Person</button>
       <p> Is Logged In : { isLoggeIn?"Yes":"NO"}</p>

       <p>Array Values : {arrayVal.join(',')}</p>
       <button type="button" class="btn btn-success" onClick={changeArray}>Update Person</button>
       </>
    )
}
export default UseStateHook;
