import React, {useState} from 'react'

const ConditionalRendComp = () => {
    
    const[isLoggedIn, setLoggedIn]= useState(true)

    //1. conditional rendering using if/else
    // if(isLoggedIn){
    //     return <Login/>
    // }else{
    //     return <Signup/>
    // }

    //2. Conditional rendering using Variable

    // let rendComponent;
    // if(isLoggedIn){
    //     rendComponent = <Login/>
    // }else{
    //     rendComponent = <Signup/>
    // }
    // return rendComponent;

    //3. Conditional rendering using ternory operator

    //return isLoggedIn ? <Login/> : <Signup/>

    //4. Conditional rendering using short circuit
        return isLoggedIn && <Login/>


}

const Login =()=>{

    return(
        <>
            <h4>Login</h4>
            <p> User Name : <input type='text'/> </p>
            <p> Password : <input type='text'/> </p>
        </>
    )
}

const Signup=()=>{

    return(
        <>
            <h4>Sign Up</h4>
            <p> Full Name : <input type='text'/> </p>
            <p> User Name : <input type='text'/> </p>
            <p> Password : <input type='text'/> </p>
            <p> email id : <input type='text'/> </p>
            <p> Mobile Num : <input type='text'/> </p>
        </>
    )
}

export default ConditionalRendComp;
