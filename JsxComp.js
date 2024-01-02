import React from "react";
// const JsxComp = ()=> {
//     let p=20, q=10;
//     return(
//         <div>
//             <h2> Welcome to JSX component</h2>
//             <h3>Addition of two numbers is : {p+q}</h3>
//             <h4>{ p>30 ?"P is gretter than 30" : "P is smaller than 30"}</h4>
//         </div>
//     )
// }

const JsxComp = ()=> {
    let p=20, q=10;
    return(
         React.createElement('div',null, React.createElement('h1', null, 'Welcome to html code withough jsx'))
    )
}

export default JsxComp;