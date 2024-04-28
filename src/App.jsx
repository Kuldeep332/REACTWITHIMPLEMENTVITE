import { useState } from "react";

const App=()=>{
  const testHandel=(msg)=>{
    console.log(msg)

  }
  return <div>
<h1>hrlo</h1>
<button onClick={()=>testHandel("hello")}>event call</button>
  </div>
}
// function App() {

//   // let ABC=12;

//   let [time,setage]=useState(new Date().toLocaleTimeString);
//   // useState;
  
//    setInterval(() => {
    
//     // console.log(new Date().toLocaleTimeString)
//     setage(new Date().toLocaleTimeString)
//   }, 1000);
//   setage(a);
// return (
//   <>
//     <h1>{time}</h1>
    

//     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora reprehenderit eos.</p> */}
//     {/* <button onClick={change}>click</button> */}
//   </>
// )
// }


export default App
