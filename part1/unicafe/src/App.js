import React ,{useState} from 'react'
 const Statistics=(props)=>{
   if(props.good===0&&props.neutral===0&&props.Bad===0){
     return <div style={{color:"red",textAlign:"center"}}>No feedBack given!!</div>
   }
   return <div>
     <h2 style={{textAlign:"center"}}>Statistics</h2>
     <div style={{textAlign:"center"}}>
       <table class='center' style={{textAlign:"center"}} >
         <tr>
           <td><h3>Good</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.good}</strong></td>
         </tr>
         <tr>
           <td><h3>Neutral</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.neutral}</strong></td>
         </tr>
         <tr>
           <td><h3>Bad</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.Bad}</strong></td>
         </tr>
         <tr>
           <td><h3>Total</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.total}</strong></td>
         </tr>
         <tr>
           <td><h3>Average</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.average}</strong></td>
         </tr>
         <tr>
           <td><h3>Postive</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.postive}</strong> </td>
         </tr>
       </table>
             </div>

   </div>
 }
 const Button=(props)=>{
   return <><button onClick={props.handleClick} style={{height:"40px",textAlign:"center"}}>{props.text}</button></>
 }
const App=()=>{
  
  const[feedBack,SetFeedBack]=useState({good:0,Neutral:0,Bad:0})
  console.log(feedBack.good,feedBack.Neutral,feedBack.Bad)
  const handleClickGood=()=>{
   const newFeedBack={...feedBack,good:feedBack.good+1}
   SetFeedBack(newFeedBack)
  }
  const handleClickNeutral=()=>{
    const newFeedBack={...feedBack,Neutral:feedBack.Neutral+1}
    SetFeedBack(newFeedBack)
   }
   const handleClickBad=()=>{
    const newFeedBack={...feedBack,Bad:feedBack.Bad+1}
    SetFeedBack(newFeedBack)
   } 
 let sums=feedBack.good+feedBack.Neutral+feedBack.Bad
  return(<div style={{textAlign:"center"}} >
    <h1 style={{textAlign:"center"}}>Give FeedBack</h1>
    <div style={{padding:"10%,0,10%,0",textAlign:"center"}}>
      
     <Button text="Good" handleClick={handleClickGood}/>&nbsp;
     <Button text="Neutral" handleClick={handleClickNeutral}/>&nbsp;
     <Button text="Bad" handleClick={handleClickBad}/>&nbsp;
    </div>
   
    <Statistics good={feedBack.good } neutral={feedBack.Neutral} Bad={feedBack.Bad}  total={sums} average={sums/3} postive={feedBack.good/sums}/>
    
     

     
     
  </div>)
}
export default App