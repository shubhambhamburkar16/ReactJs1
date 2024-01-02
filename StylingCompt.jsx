import './Styling.css'
const stylingComp =()=>{
    const test ={
        color:"blue",
        fontSize: "100px"
    }
    return (
        <>

        <h1 style={{color:"red"}}>Styling to Comp using inline CSS</h1>

        <h2 style={test}>Styling to Compt using internal CSS</h2>

        <h3 className="StyleComp">Styling to Compt using External CSS</h3>
        </>
    )
}
export default stylingComp;